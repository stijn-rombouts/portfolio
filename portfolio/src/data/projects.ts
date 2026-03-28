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
    name: 'Medication Support System (SKIL2 Semester 1)',
    icon: '/projects/skill2_1/skill2_1.png',
    github: 'https://github.com/stijn-rombouts/skill-2-project-week/',
    description: 'A safe and reliable medication support system for elderly users and caregivers.',
    technologies: ['Vue.js', 'Quasar', 'Mobile App'],
  },
  {
    id: 'skill2-semester-2',
    name: 'Hosting Platform (SKIL2 Semester 2)',
    icon: '/projects/skill2_2/RKE2.png',
    description: 'A complete hosting platform for PHP, Laravel, and Static websites, featuring a managed RKE2 Kubernetes cluster with Rancher.',
    technologies: ['RKE2', 'Kubernetes', 'Longhorn', 'Rancher', 'GitHub Actions', 'Grafana', 'OPNsense', 'PHP', 'Laravel']
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
