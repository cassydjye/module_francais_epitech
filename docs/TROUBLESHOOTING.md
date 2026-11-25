# Troubleshooting

- Blank assets on Pages: verify the Vite base and use imported URLs, never root-relative paths.
- A stale preference: remove keys prefixed with `comlab-` from localStorage.
- Validation failure: check duplicate IDs, grades and exact case-sensitive file paths.
- Direct route failure: retain `createHashRouter`.
