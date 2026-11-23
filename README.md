# Insure On The Spot — Website Demo

A responsive, multi-page website demonstration built with HTML5, CSS3, Bootstrap, and vanilla JavaScript.

This project demonstrates modular front-end development through reusable HTML components, configuration-driven page rendering, dynamic DOM manipulation, and responsive layouts.

Developed as a technical assessment project with AI-assisted development and human-directed implementation.

## Project Overview

The website recreates selected sections of an insurance company's website, focusing on:

- Responsive and consistent user interface design.
- Reusable HTML components.
- Separation of structure, presentation, and behavior.
- Configuration-driven content rendering.
- Maintainable front-end architecture.
- Automated static website deployment.

## Features

- **Multi-page Website:** Homepage, blog, contact, and locations pages.
- **Reusable HTML Components:** Dynamically loaded header, footer, and hero sections.
- **Configuration-Driven Rendering:** Page-specific hero images, content, CSS classes, and element IDs.
- **Dynamic DOM Manipulation:** JavaScript-powered component injection and content generation.
- **Responsive Navigation:** Bootstrap-powered navigation with current-page accessibility attributes.
- **Location Directory:** Office information, contact details, and embedded map content.
- **Custom Styling:** Organized stylesheets with reusable CSS rules and page-specific styling.
- **Automated Deployment:** GitHub Actions workflow for GitHub Pages.

## Technology Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic markup and page structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Dynamic rendering and DOM manipulation |
| Bootstrap | Responsive layout and navigation |
| jQuery | Local Bootstrap dependency |
| GitHub Actions | Deployment automation |
| GitHub Pages | Static website hosting |

## Project Structure

```text
iots-website-demo/
│
├── .github/
│   └── workflows/
│       └── pages.yml
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   ├── demo-home.css
│   │   └── styles.css
│   │
│   ├── fonts/
│   │   ├── Proxima-Nova-Font.otf
│   │   ├── Proxima-Nova-Light.otf
│   │   └── Proxima-Nova-Thin.otf
│   │
│   ├── js/
│   │   ├── bootstrap.min.js
│   │   ├── jquery.min.js
│   │   └── scripts.js
│   │
│   └── media/
│       ├── contact/
│       ├── footer/
│       ├── header/
│       └── locations/
│
├── includes/
│   ├── footer.html
│   ├── header.html
│   └── hero.html
│
├── index.html
├── blog.html
├── contact.html
└── locations.html
```

## Architecture and Implementation

The project follows a modular, configuration-driven front-end architecture using vanilla JavaScript.

Rather than introducing a front-end framework, the implementation uses native browser APIs and reusable HTML partials.

### 1. Reusable HTML Components

Shared interface sections are maintained in the `includes/` directory.

| Component | Responsibility |
|---|---|
| `header.html` | Shared website header and navigation |
| `footer.html` | Shared footer and navigation links |
| `hero.html` | Reusable hero section for interior pages |

These components are loaded dynamically using the native JavaScript Fetch API.

Pages define their component placeholders through `data-include` attributes, allowing shared markup to be maintained independently of individual page files.

### 2. Configuration-Driven Rendering

The JavaScript implementation uses a `heroSettings` configuration object to manage page-specific hero content.

Configuration includes:

- Hero image paths and alternative text.
- Form CSS classes.
- Element IDs.
- Dynamic benefit list content.

This approach allows multiple pages to share the same HTML component while maintaining their own presentation and content settings.

### 3. Dynamic DOM Manipulation

The main JavaScript implementation is located in:

`assets/js/scripts.js`

It handles:

- DOM initialization.
- Dynamic HTML component loading.
- Fetch response handling.
- Component injection.
- Current-page identification.
- Navigation accessibility attributes.
- Page-specific hero configuration.
- Dynamic list element generation.

The implementation uses native JavaScript functionality, including `fetch()`, `URL`, `document.createElement()`, and DOM manipulation methods.

### 4. Separation of Concerns

The project separates its primary front-end responsibilities:

- **HTML:** Page structure and content.
- **CSS:** Layout, styling, and responsive presentation.
- **JavaScript:** Dynamic content loading and interactive behavior.

This structure makes individual components easier to maintain and update without unnecessarily duplicating shared markup.

## Getting Started

### Requirements

- A modern web browser.
- A local HTTP development server.
- A code editor (Visual Studio Code recommended).

No Node.js installation, package manager, or compilation process is required.

### Installation

Clone the repository:

```bash
git clone https://github.com/cher099/iots-website-demo.git
```

Navigate to the project directory:

```bash
cd iots-website-demo
```

### Running Locally

The project uses JavaScript `fetch()` to load shared HTML components. Therefore, it must run through a local HTTP server instead of directly opening HTML files through the `file://` protocol.

**Option 1: Python HTTP Server**

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

**Option 2: Visual Studio Code Live Server**

1. Open the project directory in Visual Studio Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## Deployment

The repository includes a GitHub Actions workflow for automated GitHub Pages deployment.

Workflow configuration:

`.github/workflows/pages.yml`

The deployment workflow:

1. Checks out the repository.
2. Configures GitHub Pages.
3. Uploads the static website files as a deployment artifact.
4. Deploys the artifact to GitHub Pages.

Deployment is triggered by pushes to the `main` branch or through manual workflow execution.

## AI-Assisted Development

This project was developed through a collaborative, AI-assisted development process.

AI assistance was used during different stages of development, including:

- Technical planning and implementation guidance.
- Front-end code development and refinement.
- Component architecture and code organization.
- Troubleshooting and debugging.
- Documentation preparation.

The project involved human direction, review, and technical decision-making throughout the development process.

AI assistance is acknowledged as part of the development workflow rather than representing the project as entirely AI-generated or entirely human-written.

## Project Scope and Limitations

This repository represents a static front-end website demonstration.

It does not include:

- Backend application logic.
- Database integration.
- User authentication.
- Content management system integration.
- Functional insurance quote processing.
- Policy management functionality.

External links, embedded services, and website content are included within the demonstration scope.

## Third-Party Assets and Dependencies

The project includes locally bundled Bootstrap and jQuery libraries, along with fonts, images, and other visual assets.

Third-party libraries and assets remain subject to their respective licenses and ownership terms.

## License

No open-source license is currently provided.

The repository is intended as a development portfolio and technical demonstration. Third-party assets and materials remain subject to their respective owners' rights and licensing conditions.

---

**Developer:** Cherwin Jay

**Repository:** [github.com/cher099/iots-website-demo](https://github.com/cher099/iots-website-demo)

**Development Approach:** AI-assisted, human-directed development
