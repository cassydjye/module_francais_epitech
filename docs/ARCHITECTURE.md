# Architecture

The Vite entry point creates a hash router so deep links work on GitHub Pages. `src/pages` composes feature modules; `src/features` owns interactive logic; `src/data` is the single content source; `src/i18n` owns every interface translation. Historical projects stay in `TEK1` and `TEK2`; all approved teaching decks live in `resources/workshops` and are exposed from their corresponding workshop page. Vite emits hashed copies only when building. No backend or network API exists.
