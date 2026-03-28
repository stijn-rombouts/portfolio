export interface Project {
  id: string;
  name: string;
  icon: string;
  github?: string;
  description: string;
  technologies?: string[];
  images?: string[];
  htmlContent?: string;
}

export const projects: Project[] = [
  {
    id: 'skill2-semester-1',
    name: 'Medication Support System (SKIL2)',
    icon: '/projects/skill2_1/skill2_1.png',
    github: 'https://github.com/stijn-rombouts/skill-2-project-week/',
    description: 'Een veilig en betrouwbaar medicatie-ondersteuningssysteem voor ouderen en mantelzorgers.',
    technologies: ['Vue.js', 'Quasar', 'Mobile App'],
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio',
    icon: '/icons/favicon-128x128.png',
    github: 'https://github.com/stijn-rombouts/portfolio/',
    description: 'My personal portfolio website, built with Vue 3, Quasar, and Vite.',
    technologies: ['Vue.js', 'Quasar', 'Vite', 'TypeScript']
  }
];
