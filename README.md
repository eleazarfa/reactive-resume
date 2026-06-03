# Resume Web App

A clean, bilingual resume website built with React, TypeScript and Vite.

The project renders professional experience, skills, languages and a print-ready CV using modern front-end architecture and localization support.

## Features

- React 19 + TypeScript
- Vite development and build pipeline
- Bilingual UI with `react-i18next`
- Modular resume data and typed interfaces
- Print-friendly CV export via browser print
- Clean component structure and reusable layout patterns

## Project structure

- `src/App.tsx` – main application shell
- `src/components/` – reusable UI components
- `src/data/` – resume content and mock translation resources
- `src/types/` – TypeScript interfaces for data contracts
- `src/i18n.ts` – i18next initialization
- `src/main.tsx` – app entry point and i18n import
- `src/locales/` – translation JSON files for supported locales

## Getting started

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Usage

- Use the language switch control in the actions bar to toggle between English and Spanish.
- Click the print button to export the resume to PDF or print it directly from the browser.

## Architecture Decisions

Implemented `i18next` for internationalization (i18n), completely separating text resources into modular JSON schemas. This abstracts the presentation layer from content data, ensuring a maintainable and scalable design aligned with enterprise application development standards.

### Why this architecture

- `react-i18next` keeps translation logic isolated from UI components.
- JSON locale files make it easy to add or update languages without changing component code.
- TypeScript interfaces enforce a predictable data shape for experience, skills and languages.
- Vite provides a fast developer experience with instant reloads and minimal config.

## Notes

The `src/main.tsx` file imports `./i18n` to ensure translation resources are initialized before the app renders. This avoids runtime issues such as a missing `changeLanguage` method on the i18n object.

## License

This repository is provided as an example portfolio project.
