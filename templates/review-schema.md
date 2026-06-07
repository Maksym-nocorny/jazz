# Review: <artifact name>

> Written by the Judge to `reviews/<artifact>.md`. Machine-readable so the PM can route it.
> Only `status: approved` lets the PM advance the phase. Any `blocking` finding forces `needs-revision`.

```
artifact: <path>
reviewed_by: judge
date: <YYYY-MM-DD>
status: approved | needs-revision | rejected
```

## Findings
```
- file: <path>
  where: <component / line / node>
  severity: blocking | important | nit
  message: <what's wrong, specifically>
  suggested_fix: <concrete change>
  resolution:            # filled by the author when fixed
```

## Summary
<2–3 sentences: what blocks vs what's polish, and the single most important fix.>
