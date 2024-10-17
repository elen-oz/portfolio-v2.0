import rssApp from '../assets/projects/RSS-App.webp';
import diffCalc from '../assets/projects/diff-calc.webp';
import brainGames from '../assets/projects/brain-games.webp';
import Dojo from '../assets/projects/Dojo.webp';
import ReactMeals from '../assets/projects/ReactMeals.webp';
import todayILearned from '../assets/projects/today-i-learned.webp';
import taskManager from '../assets/projects/tasks-manager.webp';
import chatFirebase from '../assets/projects/chat-firebase.webp';
import zonixx from '../assets/projects/zonixx.webp';

export type Project = {
  id: number;
  image: string;
  github: string;
  live: string;
  stack: string[];
};

const data: Project[] = [
  {
    id: 10,
    image: zonixx,
    github: 'https://github.com/elen-oz/zonixx',
    live: 'https://zonixx.vercel.app/',
    stack: [
      'Next.js 14',
      'TypeScript',
      'NextUI',
      'Tailwind CSS',
      'Zustand',
    ],
  },
  {
    id: 7,
    image: taskManager,
    github: 'https://github.com/elen-oz/hi_todo-fullstack',
    live: 'https://to-do-app-git-main-g6d.vercel.app/',
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
    image: rssApp,
    github: 'https://github.com/elen-oz/rss-aggregator',
    live: 'https://frontend-project-11-01.vercel.app/',
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
    id: 8,
    image: chatFirebase,
    github: 'https://github.com/elen-oz/chat_react-firebase',
    live: 'https://chat-react-firebase-6de84.web.app/',
    stack: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    id: 4,
    image: Dojo,
    github: 'https://github.com/elen-oz/the-dojo',
    live: 'https://thedojosite-355e3.web.app/',
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
    image: ReactMeals,
    github: 'https://github.com/elen-oz/food-order-app',
    live: 'https://food-order-app-9b4ad.web.app/',
    stack: ['React.js', 'JavaScript', 'CSS', 'Firebase: Hosting'],
  },
  {
    id: 6,
    image: todayILearned,
    github: 'https://github.com/elen-oz/today-i-learned-app',
    live: 'https://today-i-learned-app-mauve.vercel.app/',
    stack: [
      'JavaScript',
      'React.js',
      'HTML',
      'Supabase: Database',
      'Supabase: Hosting',
    ],
  },
  {
    id: 2,
    image: diffCalc,
    github: 'https://github.com/elen-oz/difference-calculator',
    live: '',
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
    image: brainGames,
    github: 'https://github.com/elen-oz/brain-games',
    live: '',
    stack: ['Node.js', 'Npm', 'JavaScript', 'ESLint (Airbnb)', 'Code Climate'],
  },
];

export default data;