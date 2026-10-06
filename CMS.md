# 79 East CMS (Keystatic) — free setup

Content lives as plain files in this repository (`content/*.json` and `public/uploads/`).
The editor at `/keystatic` reads and saves those files. On the live site, each save is a
commit to GitHub, and Netlify rebuilds automatically (about 1–2 minutes). There is no
database and nothing to pay for: GitHub and Netlify's free plans are enough.

## What editors can change

| Section | Contains |
| --- | --- |
| **Home / About / Sustainability page** | Every heading, paragraph, button, card, step and image. Cards, steps and rows can be added, removed and reordered. Each page has a **Search engine listing** (browser title and Google description). |
| **Site settings** | Menu links, social links, contact email, footer (address, links, contact lines) and the default SEO text. |

Pressing Enter in a multi-line box becomes a line break on the site. Page layouts and styling stay in code.
Upload web-sized images (under about 500 KB); large photos slow the site down.

## Try it on your computer

```bash
npm install
npm run dev        # site: http://localhost:3000    editor: http://localhost:3000/keystatic
```

Locally there is no login, and saving writes straight to `content/` and `public/uploads/`.

## Put it live: one-time setup

1. **Push this project to a GitHub repository** (private is fine).
2. **Create the GitHub app Keystatic uses to sign people in** (free, about 2 minutes). In a file named `.env.local`:
   ```
   NEXT_PUBLIC_KEYSTATIC_STORAGE=github
   NEXT_PUBLIC_KEYSTATIC_REPO=your-github-name/your-repo-name
   ```
   Run `npm run dev`, open `http://localhost:3000/keystatic`, and follow the on-screen "create GitHub app" steps.
   Keystatic writes the credentials to your `.env` file.
3. **Netlify** → *Add new site* → import the repository (Netlify detects Next.js; no extra settings). Under *Site configuration → Environment variables* add:
   - `NEXT_PUBLIC_KEYSTATIC_REPO` (same as above)
   - `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` (copy these from the `.env` file in step 2)
4. **Use the client's domain.** Add it in Netlify (*Domain management*), then in your GitHub app's settings (GitHub → Settings → Developer settings → GitHub Apps) add this callback URL:
   `https://their-domain.com/api/keystatic/github/oauth/callback`
5. **Give the client access.** They create a free GitHub account; add them to the repository as a collaborator with **Write** access. They then open `https://their-domain.com/keystatic` and sign in with GitHub.

## Good to know

- Everyone who edits needs a (free) GitHub account with write access to the repository. Nobody else can save.
- Netlify's free plan includes 300 build minutes a month. A rebuild takes about a minute, so that is hundreds of edits.
- The public pages are fully static, so they stay online and fast even if the editor is unavailable.
- Every save is a commit, so GitHub keeps the full history and any change can be undone.
- To add new kinds of fields or sections, edit `keystatic.config.ts` and the matching component in `components/`.
