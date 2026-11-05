# tomleewu.github.io

Source for [tomleewu.com](https://tomleewu.com), hosted on GitHub Pages.

## Setup

Use Node.js 22 or newer, pnpm 12.16.1, and Python 3 for the local preview.
If pnpm is not installed, run `npm install --global pnpm@12.16.1`.

```sh
pnpm install --frozen-lockfile
```

## Local preview

Start the CSS watcher and local server together:

```sh
pnpm dev
```

Open [localhost:8080](http://localhost:8080). The CSS rebuilds as you edit.
Refresh the browser to see changes. Press Ctrl+C to stop both processes.

To serve the existing files without watching for edits, run `pnpm preview`.

## Publishing

Run `pnpm build` before committing changes to the page or styles. It compiles
`main.css` into `static/dist.css` and updates the stylesheet URL in `index.html`
with a hash of the CSS, so visitors fetch new styles when they change.

Commit the generated CSS and updated HTML along with the source changes.
GitHub Pages publishes the root of `master` after a push.
