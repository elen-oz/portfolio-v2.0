import rssApp from '../assets/projects/RSS-App.webp';
import diffCalc from '../assets/projects/diff-calc.webp';
import brainGames from '../assets/projects/brain-games.webp';
import Dojo from '../assets/projects/Dojo.webp';
import ReactMeals from '../assets/projects/ReactMeals.webp';
import todayILearned from '../assets/projects/today-i-learned.webp';
import taskManager from '../assets/projects/tasks-manager.webp';

export type Project = {
  id: number;
  name: string;
  image: string;
  github: string;
  live: string;
  description: string;
  features: string[];
  stack: string[];
};

const data: Project[] = [
  {
    id: 7,
    name: 'Tasks manager',
    image: taskManager,
    github: 'https://github.com/elen-oz/hi_todo-fullstack',
    live: 'https://to-do-app-git-main-g6d.vercel.app/',
    description:
      'This project is the final study project for the Beyond the Endpoint module at Hyper Island. It is a service designed for creating and managing tasks. The frontend is developed using React.js with TypeScript and styled with Tailwind CSS. The backend is built with Node.js, utilizing Express for server setup, Sequelize as the ORM, and PostgreSQL as the database, with JWT for authentication.',
    features: [
      'React.js with TypeScript',
      'Tailwind CSS for styling',
      'Node.js with Express for backend development',
      'JWT for authentication',
      'Sequelize ORM for database management',
      'Asynchronous request handling (GET, PATCH, DELETE, POST)',
      'Profile management including registration, login, and profile editing',
      'Task management functionality',
    ],
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'JWT',
      'Sequelize',
      'PostgreSQL',
    ],
  },
  {
    id: 1,
    name: 'RSS Aggregator',
    image: rssApp,
    github: 'https://github.com/elen-oz/rss-aggregator',
    live: 'https://frontend-project-11-01.vercel.app/',
    description:
      'RSS Aggregator is a specialized tool designed to collate news feeds, article announcements, and other content from various websites. This project is built with pure JavaScript and uses the Bootstrap library for styling.',
    features: [
      'JavaScript',
      'Asynchronous programming (Promises)',
      'Development is done according to the MVC pattern',
      'Parsing RSS feeds',
      'Form validation',
      'Internationalization',
      'Automatic code quality checking',
      'Interface markup using Bootstrap',
    ],
    stack: [
      'HTML',
      'Bootstrap',
      'JavaScript',
      'DOM API',
      'yup',
      'on-change',
      'i18next',
      'axios',
      'GitHub Action',
      'Code Climate',
    ],
  },
  {
    id: 2,
    name: 'CLI App: Difference Calculator',
    image: diffCalc,
    github: 'https://github.com/elen-oz/difference-calculator',
    live: '',
    description:
      'Difference Calculator is a console application that designed to determine the difference between two data structures. It supports various file formats including .json, yml and .yaml, and can handle both flat and nested structures.',
    features: [
      'JavaScript',
      'Functional programming (tree data structure, recursion, dynamic dispatch)',
      'Library commander.js: initialization of command-line utility',
      'Library lodash: methods for working with objects',
      'NodeJS readFileSync: synchronous method for reading data from files',
      'Parsing data from json, yaml, lml formats',
      'Framework Jest: automated testing (Test Driven Development methodology)',
      'Continuous Integration/CI (Github Actions, Travis)',
      'Code style checking with CodeClimate',
    ],
    stack: [
      'JavaScript',
      'Node.js (FS module)',
      'NPM',
      'Jest',
      'Commander',
      'ESLint (Airbnb)',
      'GitHub Action',
      'Code Climate',
    ],
  },
  {
    id: 3,
    name: 'CLI App: Brain Games',
    image: brainGames,
    github: 'https://github.com/elen-oz/brain-games',
    live: '',
    description:
      'Brain Games is a console app with collection of five mini-games designed to challenge the users mental agility. Each game begins with a greeting, personalized with the users name, and consists of three rounds.',
    features: [
      'Functional programming (recursion)',
      'npm package readlineSync: for reading user input in the console',
      'Project environment setup (npm, eslint, node.js)',
      'Code style checking with CodeClimate',
      'Continuous Integration/CI (Github Actions, Travis)',
    ],
    stack: ['Node.js', 'Npm', 'JavaScript', 'ESLint (Airbnb)', 'Code Climate'],
  },
  {
    id: 4,
    name: 'The Dojo',
    image: Dojo,
    github: 'https://github.com/elen-oz/the-dojo',
    live: 'https://thedojosite-355e3.web.app/',
    description:
      'This is a collaborative project management tool that allows users to register, invite colleagues, and work together on projects. This application is built with React.js, CSS, and HTML, and uses Firebase for backend services. If you do not want to create user: login: jake@email.com, password: 123123',
    features: [
      'User Authentication: The application supports signup and login',
      'Avatar Image Upload (100kb limit)',
      'Project Creation and Management: Users can create new projects and manage them. They can also delete projects when they are completed.',
      'Commenting on projects',
      'Project Sorting: Projects can be sorted by categories',
    ],
    stack: [
      'React.js',
      'JavaScript',
      'Firebase: Auth',
      'Firebase: Database',
      'Firebase: Storage',
      'Firebase: Hosting',
    ],
  },
  {
    id: 5,
    name: 'Food Order App',
    image: ReactMeals,
    github: 'https://github.com/elen-oz/food-order-app',
    live: 'https://food-order-app-9b4ad.web.app/',
    description:
      'This is a food ordering application built with React.js, CSS, and HTML. The application allows users to browse through a menu, select their desired items, and place an order.',
    features: [
      'Browse through a list of available food items',
      'Add desired items to a shopping cart',
      'Place an order for the selected items',
    ],
    stack: ['React.js', 'JavaScript', 'CSS', 'Firebase: Hosting'],
  },
  {
    id: 6,
    name: 'Today I learned',
    image: todayILearned,
    github: 'https://github.com/elen-oz/today-i-learned-app',
    live: 'https://today-i-learned-app-mauve.vercel.app/',
    description:
      'This is a web application where users can share interesting facts and vote for others. This project is built with React and uses Supabase for backend services.',
    features: [
      'Interaction with Supabase: The application uses Supabase for backend services',
      'Adding New Facts',
      'Liking Facts: Ability to vote for facts with 3 emojis',
      'Sorting Facts: Facts can be sorted based on the number of likes they have received',
      'Category Filter',
    ],
    stack: [
      'JavaScript',
      'React.js',
      'HTML',
      'Supabase: Database',
      'Supabase: Hosting',
    ],
  },
];

export default data;
