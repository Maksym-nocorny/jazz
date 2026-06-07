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

echo "Created project workspace: projects/$SLUG"
echo "Next: set client_language in STATE.md, then run brief-intake (Phase 0)."
