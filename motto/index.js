/** Host half of the hero motto component: tunable Config + settings-surface policy.
 *
 *  This is the `dsh-hero-motto/motto` subpath plugin: one of the two feature
 *  components in the bundle. It owns every motto-rotation field; the browser
 *  half (client.js, carried by the core row) reads them live.
 */
import z from '@deepseek-ai/schemastery';

/** Default phrase pool: one mixed list, no interface-language split. */
export const DEFAULT_PHRASES = [
  '探索未至之境',
  'Into the [Unknown]',
];

/** Pre-1.3.0 Chinese list, kept only so stored values stay valid. */
export const LEGACY_PHRASES_ZH = ['探索未至之境'];
/** Pre-1.3.0 English list, kept only so stored values stay valid. */
export const LEGACY_PHRASES_EN = ['Into the [Unknown]'];

/**
 * Rotation preferences for the motto component (`hero-motto`, the motto
 * rotation beside the whale). Every field is `.volatile()`: the values live in
 * the settings document for this entry, update in place without restarting the
 * plugin, and are editable from the browser card this bundle ships.
 *
 * The entry id is unchanged from pre-2.2.0 (when this was the root plugin), so
 * stored settings carry over. The border-marquee fields moved to their own
 * component in 2.1.1 (`marquee/index.js`).
 */
export const Config = z.object({
  phrases: z.array(z.string()).default(DEFAULT_PHRASES).volatile(),
  phrasesZh: z.array(z.string()).default(LEGACY_PHRASES_ZH).volatile(),
  phrasesEn: z.array(z.string()).default(LEGACY_PHRASES_EN).volatile(),
  intervalSeconds: z.number().min(2).max(120).default(8).volatile(),
  animation: z.union(['float', 'blur', 'typewriter', 'none', 'fade']).default('float').volatile(),
  fontFamily: z.string().default('').volatile(),
  showPreviewBadge: z.boolean().default(true).volatile(),
  align: z.union(['left', 'center', 'right']).default('center').volatile(),
  accent: z.string().default('#5B7BFE').volatile(),

  // ---- Legacy marquee fields (kept only so a pre-2.1.1 stored config that
  // carries them still validates against this schema). The marquee component
  // (marquee/index.js) owns the live copies now; nothing reads these.
  paletteMode: z.union(['preset', 'custom']).default('preset').volatile(),
  presetPalette: z.union(['rainbow', 'aurora', 'sunset', 'peach', 'ocean', 'cyber', 'brand']).default('rainbow').volatile(),
  customPalettes: z.array(z.object({
    id: z.string().default(''),
    name: z.string().default(''),
    colors: z.array(z.string()).default([]),
  })).default([]).volatile(),
  activeCustomId: z.string().default('').volatile(),
  borderEnabled: z.boolean().default(true).volatile(),
  glowEnabled: z.boolean().default(true).volatile(),
  glowIntensity: z.number().min(0).max(100).default(60).volatile(),
  brightness: z.number().min(0).max(200).default(100).volatile(),
  marqueeEnabled: z.boolean().default(true).volatile(),
  marqueeFlow: z.number().min(1).max(10).default(4).volatile(),
  breatheEnabled: z.boolean().default(false).volatile(),
  breathePerMin: z.number().min(10).max(60).default(24).volatile(),
  ringWidthPx: z.number().min(1).max(6).default(3).volatile(),
  scopeNewSession: z.boolean().default(true).volatile(),
  scopeChat: z.boolean().default(true).volatile(),
  focusOnly: z.boolean().default(false).volatile(),
});

/** Register the settings-surface policy: this bundle ships its own card. */
export function apply(ctx) {
  ctx.inject(['settings'], (child) => {
    child.effect(() => child.settings.configure({ auto: false }, ctx.fiber));
  });
}
