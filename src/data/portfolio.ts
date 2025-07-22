import IProject from '@data/IProject';

let portfolio: IProject[] = [
  {
    id: 1,
    images: ['mern-blog-app-1.png', 'mern-blog-app-2.png', 'mern-blog-app-3.png'],
    title: 'MERN Blog Application',

    desc: ` A full-stack blog platform built using the MERN stack and TypeScript. It features standard CRUD operations for managing blog content through a NoSQL approach. Authentication is handled via JWT and http-only cookies to identify active users. The UI is styled with Material UI, ensuring a polished and responsive experience.`,

    link: null,
  },
  {
    id: 2,
    images: ['fast-react-pizza-1.png', 'fast-react-pizza-2.png', 'fast-react-pizza-3.png'],
    title: 'Fast React Pizza Co.',

    desc: ` A front-end interface for tracking pizza deliveries, styled after Jonas Schmedtmann’s Ultimate React Crash Course project. Developed with React and TypeScript, the app incorporates routing, global state management, and utility-first styling for an enhanced UI experience.`,

    link: 'https://main.d3mr8h1idwg5of.amplifyapp.com',
  },
  {
    id: 3,
    images: ['worldwise-react-1.png', 'worldwise-react-2.png', 'worldwise-react-3.png'],
    title: 'Worldwise React',

    desc: ` A map-based travel logging app created with React. It includes a mock login system, allowing users to mark countries they’ve visited and leave notes. The application leverages React Router for navigation and Leaflet for interactive maps, while global state is handled through Context API and reducers.`,

    link: 'https://worldwise-react.onrender.com',
  },
  {
    id: 4,
    images: ['usepopcorn-1.png', 'usepopcorn-2.png', 'usepopcorn-3.png'],
    title: 'usePopcorn React',

    desc: ` A personal movie rating app modeled after IMDB, built with React. It uses custom hooks for state management and fetches movie data through the OMDB API using a secure API key.`,

    link: 'https://main.d1mumhxacwm9eg.amplifyapp.com',
  },
  {
    id: 5,
    images: ['react-quiz-1.png', 'react-quiz-2.png', 'react-quiz-3.png'],
    title: 'React Quiz Application',

    desc: ` A responsive and interactive quiz application built with React, designed to test users on React fundamentals. It features a real-time timer, progress tracking, high score system, and clean UI. The app uses Context API for global state management and fetches questions from a local JSON Server mock API.`,

    link: null,
  },
  {
    id: 6,
    images: ['bankist-1.png', 'bankist-2.png', 'bankist-3.png', 'bankist-4.png'],
    title: 'Bankist Web Site',

    desc: ` A sleek banking interface built with pure JavaScript, showcasing advanced DOM manipulation techniques. Inspired by Jonas Schmedtmann’s course project, the app simulates modern banking features with dynamic UI interactions and responsive design. Application is written in HTML, CSS (by Jonas Schmedtmann) and Vanilla JavaScript.`,

    link: 'https://main.d3tjcpu001fbe0.amplifyapp.com',
  },
  {
    id: 7,
    images: ['calculator-1.png', 'calculator-2.png'],
    title: 'Basic Calculator Application',

    desc: ` A beginner-friendly calculator app built with HTML, CSS, and Vanilla JavaScript. It implements a state machine logic inspired by Cüneyt AKINLAR and features light and dark themes controlled via modular CSS. A foundational project marking the start of my front-end journey.`,

    link: null,
  },
  {
    id: 8,
    images: ['email-sender-1.png', 'email-sender-2.png'],
    title: 'Email Sender Application',

    desc: ` A backend email automation tool built with Node.js and TypeScript. It uses Gmail API, Google OAuth2, and Nodemailer to send emails securely. Emails are structured as JSON objects, and Axios handles external API interactions. No frontend — designed purely for programmatic email delivery.`,

    link: null,
  },
  {
    id: 9,
    images: ['mp4-to-mp3-1.png', 'mp4-to-mp3-2.png'],
    title: 'Video to Audio Converter Application',

    desc: `A simple Python-based tool to convert video files (e.g., .mp4, .mov) into audio (.mp3) using FFmpeg. It automates the process with basic os and subprocess operations. Just drop your video files into the assets folder and run the script from the terminal.`,

    link: null,
  },
];

portfolio = portfolio.map((project) => {
  project.images = project.images.map((image) => {
    return `./portfolio/${image}`;
  });

  return {
    ...project,
    images: project.images,
  };
});

export default portfolio;
