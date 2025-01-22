export type Item = {
  companyName: string;
  location: string;
  date: string;
  role: string;
  description?: string;
  technologies: string[];
};

export const experiences: Item[] = [
  {
    companyName: 'Le Parisien',
    location: 'Paris, France',
    date: '2023 - Present',
    role: 'Senior Frontend Developer',
    description: `
I led the migration of an existing project to TypeScript, enhancing code maintainability and performance. I also developed a new project using Next.js and TypeScript to replace a legacy system, ensuring improved scalability and performance. I focused on enhancing web performance by optimizing loading times and implementing performance best practices. Lastly, I regularly updated and maintained the Design System to ensure consistency and usability across the project.`,
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'NextJs',
      'Storybook',
      'SCSS',
    ],
  },
  {
    companyName: 'Veepee',
    location: 'Paris, France',
    date: '2022 - 2023',
    role: 'Senior Frontend Developer',
    description:
      'I worked on a Next.js application as part of a micro-frontend project, taking responsibility for redesigning the search section. This included developing the search bar component, result page, and detail page. Additionally, I updated and added new components to the Design System.',
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'NextJs',
      'Storybook',
      'Styled-component',
    ],
  },
  {
    companyName: 'Groupe SeLoger',
    location: 'Paris, France',
    date: '2020 - 2022',
    role: 'Senior Frontend Developer',
    description: `I migrated an application to Next.js. I also implemented new features, such as an interactive map using the Mapbox library. Additionally, I monitored the website's performance and addressed front-end-related issues to ensure optimal functionality.`,
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'NextJs',
      'Storybook',
      'Styled-component',
      'Mapbox',
      'NodeJs',
    ],
  },
  {
    companyName: 'Airship',
    location: 'Paris, France',
    date: '2018 - 2020',
    role: 'Lead Frontend Developer',
    description: `I led the migration of the dashboard to a React.js application and managed a team of two developers. Additionally, I implemented state management using Redux and Redux-Saga to streamline application flow and improve performance.`,
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'NextJs',
      'Storybook',
      'Styled-component',
    ],
  },
  {
    companyName: 'AB Tasty',
    location: 'Paris, France',
    date: '2015 - 2018',
    role: 'Frontend Developer',
    description: `
I worked on redesigning and maintaining the AB Tasty script for client sites. I also improved and maintained the WYSIWYG editor by removing jQuery and replacing it with JavaScript ES6. Additionally, I created reusable widgets in a separate npm package, providing ready-to-use modifications for the editor. To showcase these widgets, I developed a marketplace.`,
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'Gatsby',
      'Storybook',
      'SCSS',
    ],
  },
];
