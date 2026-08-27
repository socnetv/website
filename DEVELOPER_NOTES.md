# Developer Notes

Notes on gotchas and non-obvious behavior in this Astro/Starlight site that aren't worth putting in the README.

## MDX treats bare `{...}` as JavaScript, not literal text

**Symptom**: `npm start` (or `astro build`) fails with:

```
[ERROR] [NoMatchingRenderer] Unable to render `_createMdxContent`.

No valid renderer was found for this file extension.
  Hint:
    This issue often occurs when your MDX component encounters runtime errors.
```

This message is Astro's generic fallback for "the compiled MDX page threw a runtime error while rendering," and it gives no file/line info. In dev mode (`astro dev`), the error can also cascade: once one `.mdx` file throws this way, Vite's module graph can get corrupted and *unrelated* pages start throwing the same error too, even though they're fine. A full `astro build` (which processes every page fresh, once) does not have this cascade problem and will point at the actual broken page.

**Root cause**: MDX files are compiled like JSX. Any `{...}` outside a fenced code block, inline code span, or `$...$`/`$$...$$` math block is parsed as an embedded JavaScript expression — exactly like `{}` in React/JSX. If you write set notation, pseudo-code, or any prose containing literal curly braces, e.g.:

```md
The maximal cliques are **{A, B, C}** and **{C, D}**.

| Step | R | P |
|---|---|---|
| Start | {} | {A,B,C,D} |
```

MDX evaluates `{A, B, C}` as a JS comma expression referencing the identifiers `A`, `B`, `C`. Since those aren't variables in scope, it throws `ReferenceError: A is not defined` the instant the page renders — which surfaces as the opaque `NoMatchingRenderer` error above.

Note: math formulas using `\{ \}` (e.g. `$ \max{\{d(u,v)\}} $`) are safe because `remark-math` extracts `$...$`/`$$...$$` content before MDX treats braces as JS.

**Fix**: wrap literal braces in backticks so they become inline code spans, which MDX leaves alone:

```md
The maximal cliques are **`{A, B, C}`** and **`{C, D}`**.

| Step | R | P |
|---|---|---|
| Start | `{}` | `{A,B,C,D}` |
```

**How to debug this class of error**: since the error message has no file/line, bisect with a full production build rather than dev mode:

```sh
npx astro build 2>&1 | grep -B2 -A15 "NoMatchingRenderer"
```

The build log prints each route as it's generated, so the error appears right after the path of the broken page (e.g. `/manual/analysis/index.html[NoMatchingRenderer]...`). If you need to find the exact line inside a large file, binary-search it: copy the suspect `.mdx` file, truncate it to N lines with `head -N file.mdx > file.mdx`, rebuild, and narrow down until the error appears/disappears. Be careful not to truncate mid-JSX-tag (e.g. inside a `<Mermaid code={\`...\`} />` block) — that produces a *different*, unrelated parse error (`Unexpected end of file in expression...`) that will send you looking in the wrong place.

## Mermaid diagrams must be re-themed for dark mode, not just re-initialized once

**Symptom**: Mermaid diagrams render fine in light mode but look glaring/washed-out in dark mode — pale lavender/white node boxes with dark borders sitting on the site's dark background, unlike the hand-styled diagram in [Clique Census](src/content/docs/manual/analysis.mdx) (Community Detection section) which explicitly sets `style` fill/stroke colors per node and looks fine in both themes.

**Root cause**: `src/layouts/BaseLayout.astro` loads Mermaid from a CDN and used to call `mermaid.initialize({ startOnLoad: true })` exactly once, with no theme option — so every diagram always used Mermaid's default (light) theme regardless of the site's actual color scheme. Starlight's dark mode is a client-side toggle (`document.documentElement.dataset.theme`, see `ThemeProvider.astro`/`ThemeSelect.astro`) that does **not** dispatch any event, so there's nothing to listen for directly.

**Fix**: `BaseLayout.astro`'s script now reads `document.documentElement.dataset.theme` to pick `"dark"` or `"default"` as the Mermaid theme, and re-renders all `.mermaid` nodes through `mermaid.run()`. A `MutationObserver` watches the `data-theme` attribute so flipping the theme toggle re-renders diagrams live, with no page reload. Because Mermaid replaces a `.mermaid` div's contents with an SVG on first render (destroying the original diagram source), `Mermaid.astro` now also stashes the raw diagram text in a `data-mermaid-source` attribute so it can be restored before each re-render.

**If you add a new Mermaid diagram**: just use `<Mermaid code={\`...\`} />` as before — the theme-awareness is handled globally. Don't hand-pick `style` fill/stroke colors per node like the Clique Census example does unless you specifically need it; that diagram predates the global fix and its hardcoded colors happen to work in both themes by luck, not by design.
