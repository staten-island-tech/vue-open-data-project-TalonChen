import { createRouter, createWebHistory } from 'vue-router'
import EUse from '../views/EUse.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EUse,
    },
  ],
})

export default router
