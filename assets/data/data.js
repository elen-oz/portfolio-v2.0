import WorkImg1 from '../assets/projects/rss.png';
import WorkImg2 from '../assets/projects/dojo.png';
import WorkImg3 from '../assets/projects/myMoney.png';
import WorkImg4 from '../assets/projects/food-order.png';
import WorkImg5 from '../assets/projects/cookingApp.png';
import WorkImg6 from '../assets/projects/brain-game.png';
import WorkImg7 from '../assets/projects/difference-calculator.png';
import WorkImg8 from '../assets/projects/today-i-learned.png';

const data = [
  {
    id: 1,
    name: 'Food Order App',
    image: WorkImg4,
    github: 'https://github.com/elen-oz/food-order-app',
    live: 'https://food-order-app-9b4ad.web.app/',
    description:
      '<b>Description</b><p>This is a food ordering application built with React.js, CSS, and HTML. The application allows users to browse through a menu, select their desired items, and place an order.</p><b>Features</b><ul><li>Browse through a list of available food items</li><li>Add desired items to a shopping cart</li><li>Place an order for the selected items</li></ul>',
  },
  {
    id: 2,
    name: 'RSS Aggregator',
    image: WorkImg1,
    github: 'https://github.com/elen-oz/rss-aggregator',
    live: 'https://frontend-project-11-01.vercel.app/',
    description:
      '<b>Description</b><p>RSS Aggregator is a specialized tool designed to collate news feeds, article announcements, and other content from various websites. It provides an easy way for users to subscribe to updates and view them in a user-friendly manner. This project is built with pure JavaScript and uses the Bootstrap library for styling.</p><b>Features</b><ul><li><strong>Subscribe to RSS Feeds</strong>: Users can subscribe to RSS feeds from various websites.</li><li><strong>View Posts</strong>: Users can view a list of all posts from their subscribed feeds.</li><li><strong>Mark Posts as Read</strong>: Users can mark posts as read, helping them keep track of the content they have already viewed.</li><li><strong>Post Summary</strong>: Users can view a summary of each post within the aggregator in a modal window.</li><li><strong>Auto-Update</strong>: The feed updates automatically every 5 seconds, ensuring users always have the latest content.</li></ul>',
  },
  {
    id: 3,
    name: 'Management App',
    image: WorkImg2,
    github: 'https://github.com/elen-oz/the-dojo',
    live: 'https://thedojosite-355e3.web.app/',
    description:
      '<b>Description</b><p>The Dojo is a collaborative project management tool that allows users to register, invite colleagues, and work together on projects. This application is built with React.js, CSS, and HTML, and uses Firebase for backend services.</p><b>Features</b><ul><li><strong>User Registration and Login</strong>: The application supports user registration and login using Firebase, ensuring a personalized experience for each user.</li><li><strong>Avatar Image Upload</strong>: Users can upload their own image to be used as an avatar, adding a personal touch to their profile.</li><li><strong>Project Creation and Management</strong>: Users can create new projects and manage them. They can also delete projects when they are completed.</li><li><strong>Commenting</strong>: Users can comment on projects, facilitating discussion and collaboration.</li><li><strong>Project Sorting</strong>: Projects can be sorted by categories, making it easy to manage and navigate through different types of projects.</li></ul>',
  },
  {
    id: 4,
    name: 'Cooking App',
    image: WorkImg5,
    github: 'https://github.com/elen-oz/cooking-site',
    live: 'https://cooking-ninja-site-e369e.web.app/',
    description:
      '<strong>Project Description</strong><p>Grin and Baste It is a cooking site that provides recipes and cooking tips for food enthusiasts. This project is built with React.js, CSS, and HTML.</p><strong>Features</strong><ul><li><strong>Add/Remove Items</strong>: The application allows users to add and delete recipes.</li><li><strong>Theme Switching</strong>: The application includes a feature to switch between different color themes.</li><li><strong>Firestore Integration</strong>: The application uses Firestore for storing and retrieving data.</li></ul>',
  },
  {
    id: 8,
    name: 'Today I Learned',
    image: WorkImg8,
    github: 'https://github.com/elen-oz/today-i-learned-app',
    live: 'https://today-i-learned-app-mauve.vercel.app/',
    description:
      '<b>Project Description</b><p>Today I Learned is a web application where users can share interesting facts and vote for others. This project is built with React and uses Supabase for backend services.</p><b>Features</b><ul><li><strong>Interaction with Supabase</strong>: The application uses Supabase for backend services, providing a seamless experience for data management.</li><li><strong>Adding New Facts</strong>: Users can share interesting facts they have learned.</li><li><strong>Liking Facts</strong>: Users can vote for facts they find interesting.</li><li><strong>Sorting Facts</strong>: Facts can be sorted based on the number of likes they have received, making it easy to find the most popular facts.</li><li><strong>Category Filter</strong>: Users can filter facts based on categories, allowing them to focus on topics they are interested in.</li></ul>',
  },
  {
    id: 5,
    name: 'My Money',
    image: WorkImg3,
    github: 'https://github.com/elen-oz/my-money',
    live: 'https://mymoney-54d85.web.app/',
    description:
      '<b>Project Description</b><p>My Money is a web application designed to help users keep track of their expenses. This project is built with React and uses Firebase for backend services.</p><b>Features</b><ul><li><strong>Interaction with Firebase</strong>: The application uses Firebase for backend services.</li><li><strong>User Registration and Login</strong>: The application supports user registration and login.</li><li><strong>Adding and Deleting Records</strong>: Users can add and delete their own expense records.</li></ul>',
  },
  {
    id: 6,
    name: 'Brain Games: CLI App',
    image: WorkImg6,
    github: 'https://github.com/elen-oz/brain-games',
    live: null,
    description:
      '<b>Project description</b><p>Brain Games is a collection of five mini-games designed to challenge the users mental agility. Each game begins with a greeting, personalized with the users name, and consists of three rounds.</p><b>Games</b><ul><li><strong>Brain Even</strong>: The game asks the user to determine if a number is even.</li><li><strong>Brain Calc</strong>: The game presents an arithmetic operation (addition, subtraction, multiplication) on two numbers and asks the user to calculate the result.</li><li><strong>Brain GCD</strong>: The game asks the user to find the greatest common divisor of two numbers.</li><li><strong>Brain Progression</strong>: The game presents an arithmetic progression with one number missing and asks the user to identify the missing number.</li><li><strong>Brain Prime</strong>: The game asks the user to determine if a number is prime.</li></ul>',
  },
  {
    id: 7,
    name: 'Difference Calculator: CLI App',
    image: WorkImg7,
    github: 'https://github.com/elen-oz/difference-calculator',
    live: null,
    description:
      '<b>Project Description</b><p>Difference Calculator is a program designed to determine the difference between two data structures. It supports various file formats including .json and .yaml, and can handle both flat and nested structures.</p><b>Features</b><ul><li><strong>Comparison of Flat Structures</strong>: The program can compare flat .json and .yaml files with a plain structure.</li><li><strong>Comparison of Nested Structures</strong>: The program can compare .json files with a nested structure. It supports different output formats including STYLISH, PLAIN, and JSON.</li></ul>',
  },
];

export default data;
