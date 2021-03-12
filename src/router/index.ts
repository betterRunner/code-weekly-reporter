import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Weekly report',
    component: () => import('../views/weekly-report'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
