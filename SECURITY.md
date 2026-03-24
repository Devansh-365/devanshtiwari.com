# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly.

**Do not open a public GitHub issue.** Instead, use one of these channels:

1. **Preferred:** [GitHub Private Vulnerability Reporting](https://github.com/Devansh-365/devanshtiwari.com/security/advisories/new)
2. **Email:** devanshtiwari365@gmail.com

Include:
- A description of the vulnerability and its potential impact
- Steps to reproduce
- Affected component (page, component, dependency)

### Response Timeline

| Step | Timeframe |
|---|---|
| Acknowledgment of your report | Within 48 hours |
| Initial assessment and severity rating | Within 5 business days |
| Fix developed and tested | Within 14 business days (severity dependent) |
| Public disclosure | After fix is deployed, coordinated with reporter |

### Responsible Disclosure

We ask that you give us a reasonable window (up to 90 days) to address the issue before any public disclosure. We will coordinate the disclosure timeline with you and credit you in the release notes (unless you prefer anonymity).

## Architecture and Attack Surface

This is a **static Next.js portfolio site** deployed on Vercel. There is no backend API, no database, no authentication, and no user-submitted data processing.

| Area | Risk Level | Notes |
|---|---|---|
| Server-side attacks | None | Static site, no API routes with user data |
| SQL/NoSQL injection | None | No database |
| Authentication bypass | None | No authentication |
| CSRF/session hijacking | None | No sessions |
| XSS | Low | React auto-escapes, no `dangerouslySetInnerHTML` in user paths |
| Supply chain | Medium | Third-party npm dependencies |
| MDX content | Low | Blog content is author-controlled, not user-submitted |

## Scope

### In Scope

- Vulnerabilities in the site's source code
- Dependencies with known CVEs that affect this project
- XSS vectors through MDX rendering pipeline

### Out of Scope

- Vulnerabilities in Vercel's hosting infrastructure
- Social engineering attacks
- Denial of service (static site)
- Issues in third-party services (report those to their maintainers directly)

## Supported Versions

Only the latest deployment on `main` at [devanshtiwari.com](https://www.devanshtiwari.com) is supported.

## Recognition

We will credit security researchers in the changelog (with your permission).

## References

This policy is informed by the [OpenSSF Vulnerability Disclosure Guide](https://github.com/ossf/oss-vulnerability-guide) and [GitHub's coordinated disclosure documentation](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/about-coordinated-disclosure-of-security-vulnerabilities).
