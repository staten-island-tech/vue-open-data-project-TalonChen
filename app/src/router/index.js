import { createRouter, createWebHistory } from 'vue-router'
import EUse from '../views/EUse.vue'
import EData from '../../components/EData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EUse,
    },
    {
      path: '/bill/:id',
      name: 'bill',
      component: EData,
    },
  ],
})

export default router
