# Architecture

The Vite entry point creates a hash router so deep links work on GitHub Pages. `src/pages` composes feature modules; `src/features` owns interactive logic; `src/data` is the single content source; `src/i18n` owns every interface translation. Historical documents stay in `TEK1` and `TEK2` and Vite emits hashed copies only when building. No backend or network API exists.
