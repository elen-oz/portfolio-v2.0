import rssApp from '../assets/projects/RSS-App.webp';
import diffCalc from '../assets/projects/diff-calc.webp';
import brainGames from '../assets/projects/brain-games.webp';
import Dojo from '../assets/projects/Dojo.webp';
import ReactMeals from '../assets/projects/ReactMeals.webp';
import todayILearned from '../assets/projects/today-i-learned.webp';

export type Project = {
  id: number;
  name: string;
  image: string;
  github: string;
  live: string;
  description: string;
  details: string;
};

const data: Project[] = [
  {
    id: 1,
    name: 'RSS Aggregator',
    image: rssApp,
    github: 'https://github.com/elen-oz/rss-aggregator',
    live: 'https://frontend-project-11-01.vercel.app/',
    description:
      'RSS Aggregator is a specialized tool designed to collate news feeds, article announcements, and other content from various websites. It provides an easy way for users to subscribe to updates and view them in a user-friendly manner. This project is built with pure JavaScript and uses the Bootstrap library for styling.',
    details: 'project details will be here soon...',
  },
  {
    id: 2,
    name: 'CLI App: Difference Calculator',
    image: diffCalc,
    github: 'https://github.com/elen-oz/difference-calculator',
    live: '',
    description:
      'Difference Calculator is a console application that designed to determine the difference between two data structures. It supports various file formats including .json and .yaml, and can handle both flat and nested structures.',
    details: 'project details will be here soon...',
  },
  {
    id: 3,
    name: 'CLI App: Brain Games',
    image: brainGames,
    github: 'https://github.com/elen-oz/brain-games',
    live: '',
    description:
      'Brain Games is a console app with collection of five mini-games designed to challenge the users mental agility. Each game begins with a greeting, personalized with the users name, and consists of three rounds.',
    details: 'project details will be here soon...',
  },
  {
    id: 4,
    name: 'The Dojo',
    image: Dojo,
    github: 'https://github.com/elen-oz/the-dojo',
    live: 'https://thedojosite-355e3.web.app/',
    description:
      'The Dojo is a collaborative project management tool that allows users to register, invite colleagues, and work together on projects. This application is built with React.js, CSS, and HTML, and uses Firebase for backend services. If you do not want to create user: login: jake@email.com, password: 123123',
    details: 'project details will be here soon...',
  },
  {
    id: 5,
    name: 'Food Order App',
    image: ReactMeals,
    github: 'https://github.com/elen-oz/food-order-app',
    live: 'https://food-order-app-9b4ad.web.app/',
    description:
      'This is a food ordering application built with React.js, CSS, and HTML. The application allows users to browse through a menu, select their desired items, and place an order.',
    details: 'project details will be here soon...',
  },
  {
    id: 6,
    name: 'Today I learned',
    image: todayILearned,
    github: 'https://github.com/elen-oz/today-i-learned-app',
    live: 'https://today-i-learned-app-mauve.vercel.app/',
    description:
      'Today I Learned is a web application where users can share interesting facts and vote for others. This project is built with React and uses Supabase for backend services.',
    details: 'project details will be here soon...',
  },
];

export default data;
