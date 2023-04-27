import { createRouter, createWebHistory } from 'vue-router';

import TreeList from './pages/TreeList.vue';
import Rubic from './pages/Rubic.vue';
import SolarSystem from './pages/SolarSystem.vue';
import Cone from './pages/Cone.vue';
import Hollywood from './pages/Hollywood.vue';
import Tree from './pages/Tree.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/three' },
    { path: '/three', component: TreeList },
    { path: '/hollywood', component: Hollywood },
    { path: '/solarsystem', component: SolarSystem },
    { path: '/tree', component: Tree },
    { path: '/cone', component: Cone },
    { path: '/rubic', component: Rubic },
  ],
});

export default router;
