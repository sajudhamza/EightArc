# EightArc website

A local implementation of EightArc's software development, AI/ML, reinforcement learning, and data analytics services website. Next.js App Router, React, TypeScript, Tailwind CSS. Statically exported for hosting.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production check run `npm run build`; static files are generated in `out/`. Serve that folder with a static web server (the `next start` command is not compatible with static export).

## Content and interactions

- Homepage: PermFlowAI and LawOnSight product sections; seven service categories including technology consulting, database administration, and IT support; animated neural network, interactive service lab, delivery process, and contact CTA.
- Lab examples: keyword document retrieval, an adjustable illustrative forecast, two simulated routes, and a selectable analytics dashboard. These examples do not call AI services or train models.
- Project inquiries: prepares a draft through the visitor's email app. No backend submissions, storage, or API keys.
- About, Insights, Careers, and Contact have generalized software and AI content. Privacy and Terms remain clearly marked as pending final policies.
- Animated border adapted from the online Magic UI component. Attribution and MIT license are retained; see THIRD_PARTY_NOTICES.md.
- All motion respects the operating system's reduced-motion preference.

## Deployment

Existing Amplify configuration is retained. The website builds as a static export; publishing depends on the hosting configuration connected to the repository. Review final company claims, contact addresses, and legal pages before publication.
