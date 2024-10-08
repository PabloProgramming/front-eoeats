import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import PlateView from '@/views/PlateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:id',
      name: 'plate',
      component: CategoryView
    },
    {
      path: '/plate/:id',
      name: 'plate',
      component: PlateView
    }
  ]
})

export default router
