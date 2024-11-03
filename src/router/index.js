import { createRouter, createWebHistory } from 'vue-router'
import {
  CategoryView,
  CreateCategoryView,
  CreatePlateView,
  EditCategoryView,
  EditPlateView,
  HomeView,
  PlateView
} from '@/views'

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
      path: '/category',
      name: 'newCategory',
      component: CreateCategoryView
    },
    {
      path: '/category/edit/:id',
      name: 'editCategory',
      component: EditCategoryView
    },
    {
      path: '/plate',
      name: 'newPlate',
      component: CreatePlateView
    },
    {
      path: '/plate/:id',
      name: 'plate',
      component: PlateView
    },
    {
      path: '/plate/edit/:id',
      name: 'editPlate',
      component: EditPlateView
    }
  ]
})

export default router
