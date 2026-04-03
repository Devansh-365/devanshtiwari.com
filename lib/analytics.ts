/**
 * Plausible custom event tracking for portfolio conversions.
 *
 * Tracks the metrics that actually matter for a portfolio:
 * - Did someone click "Book a Call"? (highest-value conversion)
 * - Did someone email me? (second-highest)
 * - Which project pages drive conversions?
 * - Are blog posts generating interest?
 * - Is the command menu being used?
 *
 * Usage:
 *   import { trackEvent } from "@/lib/analytics"
 *   trackEvent("cta_book_call", { source: "homepage" })
 */

type PlausibleFunction = (
  event: string,
  options?: { props?: Record<string, string | number | boolean> }
) => void

declare global {
  interface Window {
    plausible?: PlausibleFunction
  }
}

export function trackEvent(
  event: string,
  props?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return
  if (!window.plausible) return

  window.plausible(event, props ? { props } : undefined)
}

// ── Pre-defined events for type safety ──

/** Visitor clicked "Book a Call" CTA */
export function trackBookCall(source: string) {
  trackEvent("cta_book_call", { source })
}

/** Visitor clicked email link */
export function trackEmailClick(source: string) {
  trackEvent("cta_email", { source })
}

/** Visitor viewed a specific project */
export function trackProjectView(project: string) {
  trackEvent("project_view", { project })
}

/** Visitor clicked a project's live URL */
export function trackProjectLiveClick(project: string) {
  trackEvent("project_live_click", { project })
}

/** Visitor clicked a project's GitHub URL */
export function trackProjectGithubClick(project: string) {
  trackEvent("project_github_click", { project })
}

/** Visitor opened the command menu */
export function trackCommandMenuOpen() {
  trackEvent("command_menu_open")
}

/** Visitor downloaded the resume */
export function trackResumeDownload() {
  trackEvent("resume_download")
}

/** Visitor copied email or phone */
export function trackCopyContact(type: "email" | "phone") {
  trackEvent("copy_contact", { type })
}

/** Visitor clicked a social link */
export function trackSocialClick(platform: string) {
  trackEvent("social_click", { platform })
}

/** Visitor clicked a blog post */
export function trackBlogPostClick(slug: string) {
  trackEvent("blog_post_click", { slug })
}
