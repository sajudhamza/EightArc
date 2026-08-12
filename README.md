# EightArc Inc website

Marketing website for **EightArc Inc** (eightarc.com), built with **Next.js 14 (App Router) + Tailwind CSS** and configured as a **fully static export**, the cheapest and simplest way to host on **AWS Amplify**.

## Pages

- `/`: Home (hero, LawOnSight, PermFlowAI, services, mission)
- `/about`, `/careers`, `/news`, `/contact`
- `/privacy`, `/terms`: legal stubs

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

## Deploying to AWS Amplify

1. Push this folder to a Git repository (GitHub, GitLab, Bitbucket, or CodeCommit):

   ```bash
   git init && git add -A && git commit -m "EightArc website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. In the AWS Console, open **Amplify → Create new app → Host web app**, connect the repository and branch.

3. Amplify reads `amplify.yml` from the repo root automatically (build output is the `out/` directory). No environment variables are needed. Save and deploy.

4. After the first deploy, add your custom domain under **App settings → Domain management** (eightarc.com).

Because the site is a static export (`output: 'export'` in `next.config.mjs`), Amplify serves it from its CDN with no server-side compute, minimal cost.

## Updating content

- **News posts:** edit the array in `lib/posts.ts` (newest first).
- **Product screenshots:** the two striped blocks on the home page are placeholders (`ScreenshotPlaceholder` in `app/page.tsx`). Replace them with real screenshots by dropping images into `public/` and swapping the SVG for an `<img>`/`<Image>` (keep `rounded-[14px] border`, 4:3 ratio).
- **New products:** copy one of the two product sections in `app/page.tsx`.
- **Design tokens:** colors and fonts live in `tailwind.config.ts`.
