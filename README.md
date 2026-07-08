# Mermaid for Visual Studio Code (offline / local-only)

This repository is an **offline-capable fork** of the [Mermaid Chart VS Code extension](https://github.com/Mermaid-Chart/vscode-mermaid-chart). It is intended for **local use without a Mermaid Chart account**, without remote diagram sync, and without calls to Mermaid Chart cloud services for core editing and preview.

> **Upstream:** The original product is developed by the Mermaid team and is available on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=MermaidChart.vscode-mermaid-chart). This fork changes behavior so the extension works **fully offline** for standard diagram authoring.

---

## Getting started

### From source (development)

1. Install [pnpm](https://pnpm.io/).
2. Clone this repo and run:

   ```bash
   pnpm install
   pnpm compile
   ```

3. Open the folder in VS Code or Cursor and press **F5** to launch an **Extension Development Host** with this build loaded.

### Install a packaged build (`.vsix`)

```bash
pnpm run package
```

Then use **Extensions: Install from VSIX…** and select the generated `.vsix` file (or `code --install-extension ./<name>.vsix`).

No login or network access is required for **local** preview, syntax highlighting, snippets, and export.

---

## What works offline

- **Create and edit** `.mmd` / `.mermaid` files and Mermaid fenced blocks in Markdown  
- **Live preview** with pan/zoom and theme selection (session themes)  
- **Syntax highlighting** for Mermaid and typed diagram languages in the editor and in Markdown  
- **Validation / error highlighting** for diagram syntax  
- **Export** to SVG and PNG (including background options where supported)  
- **Markdown preview** integration for rendered diagrams  
- **Snippets and diagram help** links to public Mermaid documentation  
- **Layout:** uses the public [`mermaid`](https://www.npmjs.com/package/mermaid) and [`@mermaid-js/layout-elk`](https://www.npmjs.com/package/@mermaid-js/layout-elk) packages bundled with the extension  

---

## Not available in this offline build

The following depend on **Mermaid Chart cloud**, **private packages**, or **GitHub Copilot** integration that is **stubbed or disabled** in this fork:

- Sign-in, OAuth, manual token flows, and **cloud sync** of diagrams  
- Loading projects/diagrams from your Mermaid Chart account in the side panel  
- **AI repair**, **AI credits**, and Copilot chat tools that called remote services  
- **Remote sync** diff preview and server-backed regenerate flows  
- **Analytics** and telemetry to Mermaid Chart backends  

Some commands may still appear in the palette; they may show an informational message or no-op instead of calling the cloud.

---

## Supported diagrams

The bundled Mermaid engine supports the diagram types exposed by the current `mermaid` version, including for example:

- Flowchart, Sequence, Block, Class, Entity Relationship, Gantt  
- Mindmap, State, Timeline, Gitgraph, C4  
- Sankey, Pie chart, Quadrant, Requirement, User Journey  
- XY chart, Kanban, Architecture, Packet, Radar  

(Exact coverage follows the [Mermaid release](https://github.com/mermaid-js/mermaid) pinned in `package.json`.)

---

## Local editing & preview

### Real-time edit & preview

Side-by-side preview updates as you edit so you can iterate quickly on diagram text.

### Syntax highlighting

Mermaid syntax highlighting respects your editor theme. Diagram-type-specific highlighting is available in Markdown ` ```mermaid ` blocks.

### Pan & zoom

Pan and zoom in the preview; zoom can persist across edits, with reset to fit the view.

### Theme selector

Switch diagram themes during a session (e.g. default, forest, dark, neutral, redux variants—whatever your build exposes in the preview UI).

### Export

Export to **SVG** and **PNG** with options such as background (auto / light / dark / custom) where implemented.

### Error highlighting

Invalid syntax is surfaced with messages and line hints where the validator supports it.

### Markdown

- Detects ` ```mermaid ` blocks in Markdown  
- **Live Markdown preview** can render Mermaid without leaving the editor  
- “Edit diagram” style flows remain **local** in this fork  

### `.mmd` / `.mermaid` files

Native language support and file icons for Mermaid files in the explorer.

### Snippets & help

Trigger suggestions (e.g. after `m`) for snippets; use diagram help to open official Mermaid documentation.

---

## Commands (representative)

| Command                           | Description                               |
| --------------------------------- | ----------------------------------------- |
| **MermaidChart: Create Diagram**  | Create a new diagram in the editor.       |
| **MermaidChart: Preview Diagram** | Open a preview for the current diagram.   |
| **MermaidChart: Login**           | *Stubbed in this fork* — no cloud login.  |
| **MermaidChart: Logout**          | Clears local session state if applicable. |
| **MermaidChart: Sync Diagram**    | *No cloud sync* in this fork.             |

Use the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) to run commands; exact IDs are defined in `package.json`.

---

## Extension settings

Relevant settings include:

| Setting                                        | Purpose                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------ |
| `mermaidChart.baseUrl`                         | Unused for offline use; upstream pointed at `https://mermaid.ai/`. |
| `mermaid.vscode.dark` / `mermaid.vscode.light` | Default Mermaid themes for dark/light VS Code themes.              |
| `mermaid.vscode.maxZoom`                       | Maximum preview zoom.                                              |
| `mermaid.vscode.maxCharLength`                 | Text size limit for diagrams.                                      |
| `mermaid.vscode.maxEdges`                      | Maximum edge count for diagrams.                                   |
| `mermaid.vscode.aiExportName`                  | May be ignored when Copilot naming is unavailable.                 |

---

## Building & packaging

| Script             | Action                                                                     |
| ------------------ | -------------------------------------------------------------------------- |
| `pnpm compile`     | Build webview, markdown preview bundle, and extension output.              |
| `pnpm run package` | Produce a `.vsix` via `@vscode/vsce` (runs `vscode:prepublish` → compile). |

---

## License & attribution

This project inherits licensing from the upstream repository; see **`LICENSE`**. It is based on the Mermaid Chart VS Code extension by the Mermaid open-source ecosystem. This fork is maintained separately for **local-only** use; it is **not** the same offering as the marketplace “Mermaid Chart” product with full cloud and AI features.

---

## Release notes (fork)

### Offline fork (ongoing)

- **Local-only mode:** No authentication required for chart view and local preview.  
- **No remote sync** on save; **no analytics** to Mermaid Chart.  
- **Public dependencies:** `mermaid`, `@mermaid-js/layout-elk`; **stub** for former `@mermaid-chart/vscode-utils` (`src/stubs/vscode-utils.ts`).  
- **Cloud / Copilot AI tools** stubbed or disabled; regenerate without cloud login check where applicable.  

### Upstream 2.6.0 (2026-03-09) — reference

- Preview panel design and theme alignment with VS Code.  
- Copy PNG/SVG from export UI; rename/delete diagram links in side panel (cloud features not applicable to this fork’s sync model).  

Earlier upstream changelog entries are preserved in git history and in previous marketplace releases; this README focuses on the **offline** behavior of **this** tree.
