# Pham Van Nam QA Portfolio

A personal portfolio website for Pham Van Nam, a Computer Science student and Fresher Software Tester / QA Automation Engineer.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react
- three
- @react-three/fiber
- ESLint

## Features

- Responsive single-page portfolio
- Light/dark theme toggle
- English/Vietnamese language toggle for the main portfolio UI
- Interactive 3D QA Workspace hero scene
- QA-focused hero section
- About section
- QA skills section
- Internship experience section
- Testing projects with category filtering
- Dedicated project detail pages
- Real GitHub-linked Selenium automation practice project
- Testing artifacts section with sample QA files
- Online previews for the test case sheet and Postman collection
- Sticky navigation shared across homepage and detail pages
- Testing workflow section
- Contact section
- CV download setup
- SEO metadata for portfolio discovery

## Sample QA Artifacts

The portfolio includes sample/demo QA artifacts:

- Test case sheet sample
- Bug report sample
- Postman collection sample
- Regression checklist
- SQL validation samples
- Selenium test scripts guide

All artifact files are sample/demo materials created for portfolio purposes and do not contain confidential company or client information.

Online preview pages:

- `/artifacts/test-case-sheet`
- `/artifacts/postman-collection`

## 3D QA Workspace

The portfolio includes an interactive QA Workspace visual built with `three` and `@react-three/fiber`.

- Uses primitive geometries only.
- Does not use external model assets.
- Does not use 3D text, controls, shadows, or heavy animation.
- Canvas content is decorative.
- Important content remains available as normal HTML controls.
- Users can explore QA topics such as test cases, bug reports, API testing, Selenium automation, and SQL validation.
- Mobile uses a lightweight interactive fallback QA card.

The 3D scene is intentionally lightweight to keep the portfolio readable, fast, accessible, and recruiter-friendly.

## Project Detail Pages

The portfolio includes dedicated pages for each QA practice project:

- `/projects/manual-testing-ecommerce`
- `/projects/api-testing-user-management`
- `/projects/selenium-web-automation`
- `/projects/test-case-design-ep-bva`
- `/projects/bug-report-samples`

The Selenium automation project links to a real GitHub practice repository:

- `https://github.com/PhamNamTech/agest-selenium-phamvannam`

It is presented as a personal QA automation practice project and does not claim production-level automation coverage.

## Folder Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    artifacts/
      postman-collection/
        page.tsx
      test-case-sheet/
        page.tsx
      [slug]/
        page.tsx
    projects/
      [slug]/
        page.tsx
  components/
    Navbar.tsx
    HeroSection.tsx
    AboutSection.tsx
    SkillsSection.tsx
    ExperienceSection.tsx
    ProjectsSection.tsx
    ProjectCard.tsx
    ArtifactsSection.tsx
    ArtifactCard.tsx
    TestingWorkflowSection.tsx
    ContactSection.tsx
    Footer.tsx
    hero/
      QAWorkspace3D.tsx
      QAWorkspaceFallback.tsx
  data/
    artifacts.ts
    contact.ts
    experience.ts
    postmanCollectionPreview.ts
    projects.ts
    qaWorkspaceItems.ts
    skills.ts
    testCases.ts
    workflow.ts
  types/
    portfolio.ts
public/
  artifacts/
    bug-report-sample.md
    postman-user-management-collection.json
    regression-checklist-sample.md
    selenium-test-scripts-readme.md
    sql-validation-samples.md
    test-case-sheet-sample.csv
  cv/
    Pham-Van-Nam-CV.pdf
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Build

Create a production build:

```bash
npm run build
```

## Deployment

This project is ready to deploy on Vercel.

Recommended steps:

1. Push the project to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Keep the default Next.js build settings.
5. Deploy.

Build command:

```bash
npm run build
```

Development command:

```bash
npm run dev
```

Output:

Use the default Next.js output handled by Vercel.

## Final Checklist

- Real CV file is available at `public/cv/Pham-Van-Nam-CV.pdf`.
- Real GitHub URL is configured.
- Real LinkedIn URL is configured.
- Check all artifact links.
- Check all project detail pages.
- Run `npm run build` before deployment.

## Remaining Placeholders

- Add a real source code repository link for the Selenium practice project when available.
