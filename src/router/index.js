import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import PlateView from '@/views/PlateView.vue'
import CreateCategory from '@/views/CreateCategoryView.vue'

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
      name: 'category',
      component: CategoryView
    },
    {
      path: '/plate/:id',
      name: 'plate',
      component: PlateView
    },
    {
      path: '/category',
      name: 'newCategory',
      component: CreateCategory
    }
  ]
})

export default router
