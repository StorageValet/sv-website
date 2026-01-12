# Storage Valet Marketing Website

**⚠️ STANDALONE PROJECT — NOT CONNECTED TO CUSTOMER PORTAL**

This is a static HTML/CSS marketing website. It has:
- NO Supabase connection
- NO authentication
- NO shared code with sv-portal, sv-edge, or sv-db
- NO environment variables

## Policies
- **Secrets:** Do not add secrets to this repo. If a service needs a token, use Vercel environment variables.
- **Forms:** Any form submission must go to a dedicated endpoint/service (portal, edge, or third-party handler). No implied backend exists here.

## Deployment
- **Vercel Project:** storage-valet-website
- **URL:** https://storage-valet-website.vercel.app
- **Auto-deploys:** Push to GitHub → Vercel deploys automatically

## Making Changes
Edit HTML/CSS files directly. No build step required.

## Brand Colors (January 2025)

The marketing site uses a distinct color palette from the customer portal.

| Token | Hex | Usage |
|-------|-----|-------|
| `--action-brown` | #6B4E3D | Primary CTA buttons only |
| `--accent-teal` | #0E6F6A | Links, labels, icons, focus rings |
| `--dark-slate` | #2C4A52 | Hero panels, headers |
| `--gunmetal` | #343A40 | Body text |
| `--parchment` | #EEEBE5 | Warm backgrounds |
| `--alabaster` | #E0E1DD | Cool backgrounds |

See `styles.css` `:root` block for the complete token system.
