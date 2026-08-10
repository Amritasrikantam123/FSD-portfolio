# Interactive Multi-Page Portfolio — React

A React conversion of the Personal Portfolio Website for **CS1303 Full Stack Development — Assignment 2**.

## Features

- React functional components and Hooks only.
- Reusable `Navbar`, `Footer`, `ProjectCard`, `ContactForm`, `ProfileCard`, `AboutContent`, and `SectionHeading`.
- Project data is stored in `src/data/projects.js`.
- At least three projects are rendered with `.map()`.
- `ProjectCard` receives title, description, tech stack, image, link, and id through props.
- Two-level prop drilling example: `Home -> AboutContent ->` data-driven content.
- Theme state is lifted to `App` and passed to `Layout -> Navbar`.
- Contact form uses controlled inputs, validation state, and a disabled submit button until valid.
- Each `ProjectCard` has independent `useState` for View Details.
- Home loading sequence uses `useEffect([])` and a cleaned-up `setTimeout`.
- Theme preference is read initially and persisted with `useEffect` when it changes.
- Client-side routing with `react-router-dom`.
- Dynamic `/projects/:projectId` route uses `useParams`.
- Catch-all 404 page.
- Responsive CSS for tablet (768px) and mobile (480px).
- Semantic HTML and basic accessible form attributes.

## Setup

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

The project should build with:

```text
dist/
```

No `node_modules` directory is included in the submitted source package.

## Component tree

```text
App
└── Layout
    ├── Navbar
    ├── Routes
    │   ├── Home
    │   │   ├── ProfileCard
    │   │   └── AboutContent
    │   ├── About
    │   ├── Projects
    │   │   └── ProjectCard
    │   │       └── ProjectPreview
    │   ├── ProjectDetail
    │   ├── Contact
    │   │   └── ContactForm
    │   └── NotFound
    └── Footer
```

### Prop/state decisions

- `theme` is owned by `App` because it must affect the shared navigation/layout and persist across route changes.
- `Navbar` receives `theme` and `onToggleTheme` as props.
- `ProjectCard` receives all project-specific content as props, so it contains no hardcoded project data.
- `ProjectCard` owns its `showDetails` state, which proves that each card instance has independent state.
- `ContactForm` owns form values, validation errors, and submission feedback because those states belong only to the form.
- `Home` owns its temporary loading state because loading is only relevant to the Home page.
- `Home -> AboutContent` demonstrates data being passed from a page component to a child component; `AboutContent` further renders individual data fields, providing the requested multi-level component-data flow.

## useEffect hooks

### 1. Home loading effect

`Home.jsx` uses:

```js
useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1000);
  return () => clearTimeout(timer);
}, []);
```

It simulates a short initial loading sequence. The cleanup prevents the timer from updating an unmounted component.

### 2. Theme persistence effect

`App.jsx` reads the saved theme during initial state creation and uses:

```js
useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
}, [theme]);
```

This updates the document theme and persists the user's preference whenever the theme changes.

## Routes

- `/Home`
- `/about`
- `/projects`
- `/projects/:projectId`
- `/contact`
- `*` — 404 Not Found

`/` redirects logically to the Home component as an additional convenience route.

## Screen recording checklist

For the required 1–2 minute demonstration:

1. Start on Home and show the loading sequence.
2. Toggle light/dark mode.
3. Navigate through About, Projects, and Contact without a full page reload.
4. On Projects, expand View Details on one card and show that another card remains closed.
5. Open a dynamic project route such as `/projects/aarohi`.
6. On Contact, show that empty/invalid fields disable the Send Message button.
7. Fill valid details and show the validation success message.
8. Optionally enter an invalid URL to demonstrate the 404 page.

## Notes

The project currently uses placeholder project preview images from `placehold.co` so it can run without additional binary assets. They can be replaced with local files under `src/assets` later.
