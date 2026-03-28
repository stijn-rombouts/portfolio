export interface Project {
  id: string;
  name: string;
  icon: string;
  github?: string;
  description: string;
  status: 'Finished' | 'In Progress' | 'Finished but still improving';
  technologies?: string[];
  images?: string[];
  htmlContent?: string;
}

export const projects: Project[] = [
  {
    id: 'skill2-semester-1',
    name: 'Medication Support System (SKIL2 Semester 1)',
    icon: '/projects/skill2_1/skill2_1.webp',
    github: 'https://github.com/stijn-rombouts/skill-2-project-week/',
    description: 'A safe and reliable medication support system for elderly users and caregivers.',
    status: 'Finished',
    technologies: ['Vue.js', 'Quasar', 'Mobile App'],
  },
  {
    id: 'skill2-semester-2',
    name: 'Hosting Platform (SKIL2 Semester 2)',
    icon: '/projects/skill2_2/RKE2.png',
    status: 'In Progress',
    description: 'A complete hosting platform for PHP, Laravel, and Static websites.',
    technologies: ['RKE2', 'Kubernetes', 'Longhorn', 'Rancher', 'GitHub Actions', 'Grafana', 'OPNsense', 'PHP', 'Laravel']
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio',
    icon: '/projects/portfolio/image.png',
    github: 'https://github.com/stijn-rombouts/portfolio/',
    description: 'My personal portfolio website, built with Vue 3, Quasar, and Vite.',
    status: 'In Progress',
    technologies: ['Vue.js', 'Quasar', 'Vite', 'TypeScript']
  },
  {
    id: 'custom-amplifier',
    name: 'Custom Multi-Zone Amplifier',
    icon: '/projects/amplifier/overview.webp',
    github: 'https://github.com/Core-i99/diy-muli-zone-amplifier',
    description: 'Custom-built multi-zone audio amplifier with an ESP32-based controller',
    status: 'Finished but still improving',
    technologies: ['ESP32', 'ATTINY44', 'I2S Audio', 'SPI', 'I2C', 'Analog Electronics', 'CAD/CNC']
  },
  {
    id: 'interest-test',
    name: 'The Interest Test',
    icon: '/projects/mpi/test.webp',
    github: 'https://github.com/Thomas-More-Digital-Innovation/2526-MPI-001-Employment-Interest-Tool',
    description: 'A behavior-driven visual test for people with disabilities, developed for MPI Oosterloo.',
    status: 'Finished',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Pest Stress Testing', 'Pest Browser Testing']
  }
];

