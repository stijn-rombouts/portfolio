import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'cv', component: () => import('pages/CvPage.vue') },
      { path: 'projects', component: () => import('pages/ProjectsPage.vue') },
      /* Custom project routes */
      { path: 'projects/skill2-semester-1', component: () => import('pages/projects/Skill2-1Page.vue') },
      { path: 'projects/skill2-semester-2', component: () => import('pages/projects/Skill2-2Page.vue') },
      { path: 'projects/personal-portfolio', component: () => import('pages/projects/PortfolioPage.vue') },
      { path: 'projects/:id', component: () => import('pages/ProjectDetailsPage.vue'), props: true },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
