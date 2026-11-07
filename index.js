/** Host half of the hero motto bundle: tunable Config + settings-surface policy. */
import z from '@deepseek-ai/schemastery';

/** Default phrase pool: one mixed list, no interface-language split. */
export const DEFAULT_PHRASES = [
  '探索未至之境',
  '让思考再深一点',
  '好奇心，先下水',
  '每个问题都是一次下潜',
  '深海无噪音，思考有回声',
  '上下求索，向深而行',
  '今天想弄明白什么？',
  '慢慢想，想深一点',
  '未知的深度，刚刚好',
  '从问题出发，游向答案',
  '提一个好问题',
  '向深处，再游一米',
  'Into the Unknown',
  'Dive deeper, think further',
  'Curiosity first',
  'Every question is a dive',
  'Depth over noise',
  'Ask a better question',
  'What will you explore today?',
  'Think slow, think deep',
  'Ideas live in the deep',
  'One more meter down',
];

/** Pre-1.3.0 Chinese list, kept only so stored values stay valid. */
export const LEGACY_PHRASES_ZH = DEFAULT_PHRASES.slice(0, 12);
/** Pre-1.3.0 English list, kept only so stored values stay valid. */
export const LEGACY_PHRASES_EN = DEFAULT_PHRASES.slice(12);

/**
 * Rotation preferences. Every field is `.volatile()`: the values live in the
 * settings document for this entry, update in place without restarting the
 * plugin, and are editable from the browser card this bundle ships.
 *
 * `phrases` is the single pool. `phrasesZh`/`phrasesEn` remain declared so a
 * value stored before the merge still validates; the browser half folds them
 * into `phrases` on first read. `fade` likewise stays accepted until the
 * browser normalizes it to `float`.
 *
 * `fontFamily` only swaps the typeface: the size stays the shipped 26px.
 *
 * `showPreviewBadge` keeps or hides the shipped "Preview" pill beside the
 * headline; the headline text itself is always replaced by this bundle.
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
});

/** Register the settings-surface policy: this bundle ships its own card. */
export function apply(ctx) {
  ctx.inject(['settings'], (child) => {
    child.effect(() => child.settings.configure({ auto: false }, ctx.fiber));
  });
}
