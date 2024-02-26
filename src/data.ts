import rssApp from './assets/projects/RSS-App.webp';
import diffCalc from './assets/projects/diff-calc.webp';
import brainGames from './assets/projects/brain-games.webp';

export type Project = {
  id: number,
  name: string,
  image: string,
  github: string,
  live: string,
  description: string,
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
  },
  {
    id: 2,
    name: 'CLI App: Difference Calculator',
    image: diffCalc,
    github: 'https://github.com/elen-oz/difference-calculator',
    live: '',
    description:
      'Difference Calculator is a console application that designed to determine the difference between two data structures. It supports various file formats including .json and .yaml, and can handle both flat and nested structures.',
  },
  {
    id: 3,
    name: 'CLI App: Brain Games',
    image: brainGames,
    github: 'https://github.com/elen-oz/brain-games',
    live: '',
    description:
      'Brain Games is a console app with collection of five mini-games designed to challenge the users mental agility. Each game begins with a greeting, personalized with the users name, and consists of three rounds.',
  },
];

export default data;
