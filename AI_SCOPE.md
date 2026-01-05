# AI Scope: sv-website

**Classification:** STANDALONE MARKETING SITE

## What This Project Is
- Static HTML/CSS marketing website
- Deployed to Vercel (project: storage-valet-website)
- Auto-deploys from GitHub on push

## What This Project Is NOT
- NOT connected to Supabase
- NOT connected to authentication
- NOT sharing code with sv-portal, sv-edge, or sv-db
- NOT part of the integrated Storage Valet backend system

## If You're an AI Agent
- Treat this repo as completely independent
- Do not assume any backend integrations exist
- Do not reference sv-portal code patterns
- Changes here do not affect the customer portal

## Policies
- **Secrets:** Do not add secrets to this repo. Use Vercel environment variables if needed.
- **Forms:** Form submissions must go to a dedicated endpoint (portal, edge, or third-party). No implied backend exists here.

## If Adding Backend Functionality
If this site ever needs backend calls (forms, APIs, etc.):
1. Update this file
2. Update ~/.claude/CLAUDE.md
3. Notify the team
