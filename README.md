# INFR3120 Assignment 2 – Personal Portfolio Website

This project is a personal portfolio website developed for INFR3120 – Web and Scripting Programming.

The website was built using Node.js, Express.js and the EJS templating engine. It contains information about me, my background, projects and contact information.

The website includes four main pages:

- Home: Introduction and overview of my portfolio.
- About Me: Personal background, education and interests.
- Projects: A showcase of my projects and experience.
- Contact Me:** Contact information and ways to connect with me.

# Technologies Used

- Node.js – JavaScript runtime environment.
- Express.js – Web application framework.
- EJS – Templating engine used to render website pages.
- Bootstrap 5 – Responsive website layout and styling.
- Font Awesome – Icons used throughout the website.
- HTML – Website page structure within EJS templates.
- CSS – Custom website styling.
- JavaScript – Website functionality and application configuration.
- Render – Cloud hosting and deployment.
- Git and GitHub – Version control and source code management.

# Project Structure

```text
Assignment-02/
│
├── app.js
│
├── bin/
│   └── www
│
├── controllers/
│   └── index.js
│
├── public/
│   ├── images/
│   ├── stylesheets/
│   │   └── style.css
│   └── videos/
│       └── introduction.mp4
│
├── routes/
│   ├── index.js
│   └── users.js
│
├── views/
│   ├── about.ejs
│   ├── contact.ejs
│   ├── error.ejs
│   ├── index.ejs
│   ├── layout.ejs
│   └── projects.ejs
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

# Website Routes

The website uses Express routing to display the different EJS templates.

| Page | Route |
|---|---|
| Home | `/` |
| About Me | `/about` |
| Projects | `/projects` |
| Contact Me | `/contact` |

Each route uses the Express `res.render()` method to display its corresponding EJS template.

# EJS Layout
The website uses a shared EJS layout to maintain a consistent design across all pages.
The shared layout includes:

- Navigation bar
- Website header
- Footer
- GitHub and LinkedIn links
- Bootstrap and Font Awesome integration
- Custom CSS stylesheet

Individual page templates are rendered inside the shared layout using the EJS layout configuration.

# Public Assets
Static website assets are organized inside the public folder.

- `public/images/` – Website images and profile pictures.
- `public/stylesheets/` – Custom CSS stylesheets.
- `public/videos/` – Introduction video and multimedia assets.
Express serves these files using its static middleware.

# Installation and Setup
To run this project locally:

*1. Clone the repository*

```bash
git clone https://github.com/shahweezmuj/Assignment-02/
```

*2. Navigate into the project folder*

```bash
cd Assignment-02
```

*3. Install the required dependencies*

```bash
npm install
```

*4. Start the Express application*

```bash
npm start
```

*5. Open the website*

Navigate to:
http://localhost:3000

# Cloud Deployment

The portfolio website is deployed using Render.
https://assignment-02-odgc.onrender.com/

The GitHub repository is connected to Render, allowing the project to be deployed as a Node.js web service.
# GitHub Repository
https://github.com/shahweezmuj/Assignment-02/
The repository contains the source code and project files for Assignment 2, with commits documenting the development process.

# External Resources and References
The following external libraries and resources were used:
- Express.js: https://expressjs.com/
- EJS: https://ejs.co/
- Bootstrap 5: https://getbootstrap.com/
- Font Awesome: https://fontawesome.com/
- Node.js: https://nodejs.org/
- Render: https://render.com/

These references identify the external frameworks, libraries and documentation used in the project.

# Author
Name: Shahweez Mujtaba
Course: INFR3120 – Web and Scripting Programming
Assignment: Assignment 2 – Express Portfolio Site
