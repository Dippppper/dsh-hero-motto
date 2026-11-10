/** Host half of the hero-motto bundle's CORE row.
 *
 *  Since 2.2.0 the bundle is three rows: this core row (the package root),
 *  plus the two feature components `dsh-hero-motto/motto` and
 *  `dsh-hero-motto/marquee`. The host's client-module system attaches the
 *  shared browser half (client.js) to the package-root entry ONLY — a subpath
 *  row can never carry a client half, and disabling the carrying row removes
 *  the client from the page entirely. Keeping the carrier separate from both
 *  features is what lets either feature row be switched off independently
 *  while the settings cards and the marquee runtime keep working.
 *
 *  The core row itself owns no Config and runs no host logic; it exists to
 *  stay enabled and carry the client. Turning it off is the master switch:
 *  every piece of UI this bundle renders goes away with it.
 */
export function apply() {
  // Intentionally empty: this row carries no host-side behaviour.
}
