Interactive Multi-Page Portfolio Website

A responsive personal portfolio website built using React.js and Vite. The static portfolio from Assignment 1 was converted into a reusable React application using components, props, state management, side effects, and client-side routing.

Features
Reusable React components
Dark/Light theme toggle
Theme preference persisted using localStorage
Controlled contact form with validation
Reusable ProjectCard component
Project data stored separately in src/data/projects.js
At least three projects rendered using .map()
Independent "View Details" state for each project
Client-side routing using React Router
Dynamic project detail pages
404 Not Found page
Responsive design for mobile, tablet, and desktop
Technologies Used
React.js
Vite
JavaScript
HTML5
CSS3
React Router DOM
Project Structure
FSD-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
Setup and Run

Clone the repository:

git clone https://github.com/Amritasrikantam123/FSD-portfolio.git
cd FSD-portfolio

Install dependencies:

npm install

Start the development server:

npm run dev

Create a production build:

npm run build
Component Architecture

The application is divided into reusable functional components.

Navbar – Provides navigation links and the theme toggle.
Footer – Shared footer displayed across pages.
Layout – Provides the common Navbar and Footer structure.
ProjectCard – Generic reusable component that receives project information through props.
ContactForm – Controlled contact form with validation.
Pages – Individual components representing different application routes.

Project information is stored in:

src/data/projects.js

The Projects page maps over the project array and passes each project's data to ProjectCard through props.

Props and Prop Drilling

ProjectCard receives its project information entirely through props, including:

Title
Description
Technology stack
Image
Project link

No project content is hardcoded inside ProjectCard.

The application also demonstrates multi-level prop passing, where data received by a parent component is passed through a child component to a nested component.

State Management

The application uses useState for multiple independent pieces of state.

Theme State

The dark/light theme state is lifted to the top-level App component so that it can be shared across the application.

Contact Form State

The contact form is controlled using state for:

Name
Email
Message
Validation errors

The submit button remains disabled until the required fields are correctly filled.

Project Card State

Each ProjectCard maintains its own "View Details" state. Opening the details of one project does not affect other project cards.

useEffect Hooks
Home Page Loading

A useEffect with an empty dependency array runs when the Home component mounts.

A short setTimeout simulates a loading sequence before the Home page content is displayed.

The timer includes cleanup when the component unmounts to prevent unnecessary execution.

Theme Persistence

A useEffect runs whenever the theme changes and stores the selected theme in localStorage.

The saved theme preference is read during the initial application load so that the selected theme remains after refreshing the page.

Routing

Client-side routing is implemented using react-router-dom.

The application includes:

/Home
/about
/projects
/projects/:projectId
/contact
*

The /projects/:projectId route is a dynamic route that uses useParams() to identify and display the selected project.

The * route displays a 404 Not Found page with a link back to Home.

Navigation uses Link and NavLink instead of normal <a> tags, preventing full-page reloads.

Responsive Design and Accessibility

The website is responsive across:

Mobile: up to 480px
Tablet: up to 768px
Desktop: above 768px

Semantic HTML elements such as <nav>, <main>, <section>, <article>, and <footer> are used throughout the application.

Deployment

The project is deployed using GitHub Pages.
