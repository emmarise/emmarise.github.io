# emmarise.github.io

Personal portfolio site for Furong Tian, built with Astro, Tailwind CSS, and Preact.

## Development

```bash
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview the production build
```

## Tech Stack

- **Astro v6** - Static site generator
- **Tailwind CSS v4** - Utility-first styling
- **Preact** - Interactive islands (filters)
- **Content Collections** - Type-safe Markdown content

## Pages

- `/` - Home with bento grid layout
- `/projects` - Project showcase with status filtering
- `/life` - Travel, food, and pets stories
- `/about` - Bio, experience timeline, and skills

## Adding Content

### Projects
Add a new `.md` file in `src/content/projects/` with frontmatter:
```yaml
---
name: Project Name
description: One-liner
status: active | experimenting | shipped
tech: [Go, Docker]
repoUrl: https://github.com/emmarise/project
phase: idea | building | alpha | shipped
---
```

### Stories
Add a new `.md` file in `src/content/stories/`:
```yaml
---
title: Story Title
category: travel | food | pets
date: 2024-01-01
coverImage: /images/cover.jpg
location: City, Country
---
```

## Deployment

Deployed via GitHub Actions to https://emmarise.github.io on push to `main`.

**Important:** GitHub Pages source must be set to "GitHub Actions" in repo settings.
