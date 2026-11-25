# AGENTS.md

## Scope

This repository contains a static React application and preserved historical documents. Never delete, rewrite or silently compress PDF/PPTX source files. Do not publish workshop presenter notes without an explicit content review.

## Conventions

- Use English for code, file names, comments, tests and technical documentation.
- Use `camelCase` for values, `PascalCase` for components/types and `kebab-case` for ordinary files and routes.
- Put all user-visible interface text in `src/i18n/resources.ts` and content in `src/data`.
- Keep the application static, GitHub Pages compatible and free of tracking, secrets and external APIs.
- Validate localStorage data and protect CSV exports from spreadsheet formulas.

Run `npm run check:all` before committing.
