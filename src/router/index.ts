import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
  },
  {
    path: '/weekly-report',
    name: 'Weekly report',
    component: () => import('../views/weekly-report'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
