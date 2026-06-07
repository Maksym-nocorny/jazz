#!/usr/bin/env bash
# Scaffold a new Jazz client project workspace from templates/.
# Usage: scaffold.sh <client-slug> "<Client Name>"
set -euo pipefail

SLUG="${1:-}"
NAME="${2:-$SLUG}"

if [[ -z "$SLUG" ]]; then
  echo "Usage: scaffold.sh <client-slug> \"<Client Name>\"" >&2
  exit 1
fi
if ! [[ "$SLUG" =~ ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$ ]]; then
  echo "Error: slug must be lowercase, hyphenated, filesystem-safe (e.g. acme-coffee)." >&2
  exit 1
fi

# Repo root = four levels up from this script (.claude/skills/new-project/scripts/).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
TPL="$ROOT/templates"
DEST="$ROOT/projects/$SLUG"

if [[ -e "$DEST" ]]; then
  echo "Error: $DEST already exists — refusing to overwrite." >&2
  exit 1
fi

mkdir -p \
  "$DEST/00_brief" "$DEST/01_research" "$DEST/02_content" \
  "$DEST/03_design/art-direction" "$DEST/03_design/wireframes" \
  "$DEST/03_design/tokens" "$DEST/03_design/ui-kit" "$DEST/03_design/final" \
  "$DEST/04_build" "$DEST/05_backend" "$DEST/06_devops" \
  "$DEST/reviews" "$DEST/tests"

# Keep empty phase folders in git.
find "$DEST" -type d -empty -exec touch {}/.gitkeep \;

# Seed the state/decision/client files from templates, substituting slug + name.
seed() { # <template> <dest>
  if [[ -f "$TPL/$1" ]]; then
    sed -e "s/<client-slug>/$SLUG/g" -e "s/<client name>/$NAME/g" -e "s/<Client Name>/$NAME/g" \
      "$TPL/$1" > "$2"
  else
    : > "$2"
  fi
}
seed "STATE.md"      "$DEST/STATE.md"
seed "DECISIONS.md"  "$DEST/DECISIONS.md"
seed "CLIENT_LOG.md" "$DEST/CLIENT_LOG.md"
seed "RETRO.md"      "$DEST/RETRO.md"
seed "HANDOFF.md"    "$DEST/HANDOFF.md"

# Each client project is its OWN private repo from the start (independent of the public Jazz repo,
# which gitignores projects/*). This makes handoff a simple transfer. Best-effort — never abort the
# scaffold on a git/gh hiccup. Opt out of the remote with JAZZ_NO_REMOTE=1 (local repo only).
(
  set +e
  cd "$DEST" || exit 0
  printf '%s\n' 'node_modules/' '.next/' 'out/' 'dist/' '.vercel' '.env' '.env*.local' '.DS_Store' > .gitignore
  git init -q
  if [ -z "$(git config user.email 2>/dev/null || true)" ]; then
    login="$(gh api user -q .login 2>/dev/null || echo jazz)"
    git config user.name "$login"
    git config user.email "$login@users.noreply.github.com"
  fi
  # install the security pre-commit gate (versioned in .githooks; activated AFTER the init commit so
  # committing the hook itself isn't blocked by its own secret-pattern matches).
  if [ -f "$ROOT/templates/hooks/pre-commit" ]; then
    mkdir -p .githooks
    cp "$ROOT/templates/hooks/pre-commit" .githooks/pre-commit
    chmod +x .githooks/pre-commit
  fi
  git add -A
  git commit -qm "Init: $NAME — Jazz project workspace" >/dev/null 2>&1
  [ -f .githooks/pre-commit ] && git config core.hooksPath .githooks
  if [ "${JAZZ_NO_REMOTE:-}" != "1" ] && command -v gh >/dev/null 2>&1; then
    if gh repo create "$SLUG" --private --source . --remote origin --push >/dev/null 2>&1; then
      echo "Private GitHub repo created and pushed: $SLUG"
    else
      echo "Note: remote not created (offline / name taken / gh not authed). Local repo is ready;"
      echo "      create it later:  gh repo create $SLUG --private --source \"$DEST\" --remote origin --push"
    fi
  else
    echo "Local repo initialized (remote skipped: JAZZ_NO_REMOTE set or gh unavailable)."
  fi
)

echo "Created project workspace: projects/$SLUG (its own private repo)"
echo "Next: set client_language in STATE.md, then run brief-intake (Phase 0)."
echo "Deploy the app from projects/$SLUG/04_build (Vercel root directory = 04_build)."
