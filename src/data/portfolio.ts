import IProject from '@data/IProject';

let portfolio: IProject[] = [
  {
    id: 1,
    images: ['mern-blog-app-1.png', 'mern-blog-app-2.png', 'mern-blog-app-3.png'],
    title: 'MERN Blog Application',
    desc: '',
    link: null,
  },
  {
    id: 2,
    images: ['fast-react-pizza-1.png', 'fast-react-pizza-2.png', 'fast-react-pizza-3.png'],
    title: 'Fast React Pizza Co.',
    desc: '',
    link: null,
  },
  {
    id: 3,
    images: ['worldwise-react-1.png', 'worldwise-react-2.png', 'worldwise-react-3.png'],
    title: 'Worldwise React',
    desc: '',
    link: 'https://worldwise-react.onrender.com',
  },
  {
    id: 4,
    images: ['usepopcorn-1.png', 'usepopcorn-2.png', 'usepopcorn-3.png'],
    title: 'usePopcorn React',
    desc: '',
    link: 'https://main.d1mumhxacwm9eg.amplifyapp.com',
  },
  {
    id: 5,
    images: ['react-quiz-1.png', 'react-quiz-2.png', 'react-quiz-3.png'],
    title: 'React Quiz Application',
    desc: '',
    link: null,
  },
  {
    id: 6,
    images: ['bankist-1.png', 'bankist-2.png', 'bankist-3.png', 'bankist-4.png'],
    title: 'Bankist Web Site',
    desc: '',
    link: null,
  },
  {
    id: 7,
    images: ['calcutor-1.png', 'calcutor-2.png'],
    title: 'Basic Calculator Application',
    desc: '',
    link: null,
  },
  {
    id: 8,
    images: ['email-sender-1.png', 'email-sender-2.png'],
    title: 'Email Sender Application',
    desc: '',
    link: null,
  },
  {
    id: 9,
    images: ['mp4-to-mp3-1.png', 'mp4-to-mp3-2.png'],
    title: 'Video to Audio Converter Application',
    desc: '',
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
