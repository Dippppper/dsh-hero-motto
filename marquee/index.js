/** Host half of the border-marquee component: tunable Config + settings policy.
 *
 *  This is the `dsh-hero-motto/marquee` subpath plugin: one of the two
 *  components in the bundle (the other is the root hero-motto rotation).
 *  It owns every border-marquee field; the browser half mounts the ring/glow
 *  layers on `[data-composer-card]` and reads these values live.
 */
import z from '@deepseek-ai/schemastery';

export const Config = z.object({
  // Colour source: a built-in preset or one of the user's saved custom groups.
  paletteMode: z.union(['preset', 'custom']).default('preset').volatile(),
  presetPalette: z.union(['rainbow', 'aurora', 'sunset', 'peach', 'ocean', 'cyber', 'brand']).default('rainbow').volatile(),
  // User library: each group is 2–12 hex stops, closed at runtime.
  customPalettes: z.array(z.object({
    id: z.string().default(''),
    name: z.string().default(''),
    colors: z.array(z.string()).default([]),
  })).default([]).volatile(),
  activeCustomId: z.string().default('').volatile(),

  // Four effect switches. The whole feature turns on only when a view scope is
  // enabled AND at least one of these is on; each layer also reads its own bit.
  borderEnabled: z.boolean().default(true).volatile(),
  glowEnabled: z.boolean().default(true).volatile(),
  glowIntensity: z.number().min(0).max(100).default(60).volatile(),
  // Overall brightness of the effect (ring + glow), 0–200% (100% = normal).
  brightness: z.number().min(0).max(200).default(100).volatile(),
  marqueeEnabled: z.boolean().default(true).volatile(),
  marqueeFlow: z.number().min(1).max(10).default(4).volatile(),
  breatheEnabled: z.boolean().default(false).volatile(),
  breathePerMin: z.number().min(10).max(60).default(24).volatile(),
  ringWidthPx: z.number().min(1).max(6).default(3).volatile(),

  // Two independent view scopes; both off = feature disabled but settings kept.
  scopeNewSession: z.boolean().default(true).volatile(),
  scopeChat: z.boolean().default(true).volatile(),
  // When on, the effect (ring + glow) only shows while the composer has focus
  // (CSS :focus-within); the layers stay mounted, so toggling focus is instant.
  focusOnly: z.boolean().default(false).volatile(),
});

/** Register the settings-surface policy: this component ships its own card. */
export function apply(ctx) {
  ctx.inject(['settings'], (child) => {
    child.effect(() => child.settings.configure({ auto: false }, ctx.fiber));
  });
}
