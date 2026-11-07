# dsh-hero-motto

English | [中文](README.zh.md)

Rotating DeepSeek-style mottos beside the whale on the **new-session** screen of
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), with a
settings card on the plugin page.

The shipped headline (`探索未至之境` / `Into the Unknown`) is replaced by a small
pool of lines that rotate on a timer. It starts with just those two, so update it
under **Plugins → New-session motto rotation** with your own lines. Everything
below is configurable there.

## Features

| Feature | Notes |
|---|---|
| Phrase rotation | One mixed pool of Chinese and English lines; a shuffle bag visits every line once per cycle, so nothing repeats back to back. Ships with two lines and is meant to be filled in |
| Animations | Float-in · blur swap · typewriter (erases from the tail, then grows from the head) · none |
| Rotation interval | 2–120 seconds, drag the slider (writes on release) |
| Fonts | Four built-in presets, a "back to default" entry, or upload your own `.ttf` / `.otf` / `.woff` / `.woff2` |
| Alignment | Left · center · right, against the composer card |
| Keyword emphasis | Wrap part of a line in `[brackets]` to paint it in the accent colour, e.g. `向[深处]再游一米` |
| Accent colour | Six presets, a colour well, or a `#RGB` / `#RRGGBB` code |
| Preview badge | Keep or hide the pill beside the headline |
| Whale | The official mark, unchanged; hovering still swims it |

Text size stays the shipped 26px: this plugin swaps the typeface, never the scale.

## Install

A bundle installs from a directory:

```
plugin_manager install_bundle target=<absolute path to this checkout>
```

or, with the CLI, add the row to your profile patch:

```yaml
- insert:
    - id: hero-motto
      name: 'dsh-hero-motto'
```

The plugin then appears as **dsh-hero-motto** on the Plugins page. Its bundle
detail page carries the settings card.

### Restart required after installing

The Host half activates immediately, but the browser module is loaded once per
page. Reload the window (or restart the application) after installing, and check
the `[hero-motto] client v…` line in the console to confirm which build is live.

### `node_modules` is not committed

`index.js` imports `@deepseek-ai/schemastery` for its `Config` schema. That package
ships with DeepSeek Harness itself, so a plugin installed *inside* a profile
resolves it from the profile's own tree. If you install this checkout by linking a
directory from elsewhere, make sure `@deepseek-ai/schemastery` is resolvable from
this folder — the `.gitignore` deliberately keeps `node_modules/` out of the repo,
because a local install usually points it at a machine-specific profile path.

## Where settings live

Every field is declared `.volatile()` on the Host `Config`, so values live in the
profile's settings document for the `hero-motto` entry: they survive restarts and
plugin upgrades, and edits apply without restarting the plugin.

Uploaded fonts are different: their bytes live in the browser's IndexedDB
(`hero-motto-fonts`) and their faces are re-registered on load. They are local to
that browser — clearing site data removes them, and another machine needs the
files again.

## Known fragility

Two rules key off DeepSeek Harness class names that this plugin does not own:

- hiding the shipped headline text and preview badge, via
  `[class*="fishHitbox"]` / `[class*="titleGroup"]`;
- alignment, via `[class*="headline"]`.

If a Harness update renames those, the symptom is visible but not fatal: the
original headline reappears beside the rotating line, or alignment stops moving.
Both are single-line selector updates in `client.js`.

## Layout

| File | Role |
|---|---|
| `index.js` | Host half: the `Config` schema and the "this bundle ships its own card" policy |
| `client.js` | Browser half: the hero mark occupant, the mottos, and the settings card |
| `cordis.patch.yml` | The bundle patch that inserts the `hero-motto` row |
| `locale/*.json` | Plugin title and description for the Plugins page |
| `icon.svg` | Plugin icon |

## Licence

MIT — see [LICENSE](LICENSE).
