import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { usePlateStore } from './plate'
import api from '@/api'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])
  const restaurantId = ref('')
  const category = ref({})
  const plateStore = usePlateStore()

  const { plates } = storeToRefs(plateStore)

  async function getRestaurant() {
    const response = await api.get('/restaurant/e7f9c4a6-b658-4b13-ac15-e2a34eb040e4')
    categories.value = response.data.categoryDtoList
    restaurantId.value = response.data.id
  }

  async function getCategory(categoryId) {
    plates.value = []
    category.value = {}
    const response = await api.get(`/category/${categoryId}`)

    plates.value = response.data.platesByCategory
    category.value = response.data
  }

  async function createCategory(newCategory) {
    const response = await api.post('/category', {
      ...newCategory,
      restaurantId: restaurantId.value
    })
    return response
  }

  async function editCategory(category) {
    const payload = { ...category, restaurantId: restaurantId.value }

    const response = await api.put('/category', payload)
    return response
  }

  async function deleteCategory(categoryId) {
    const response = await api.delete(`/category/${categoryId}`)
    return response
  }

  async function resetCategory() {
    category.value = {}
  }

  return {
    categories,
    category,
    getRestaurant,
    getCategory,
    createCategory,
    editCategory,
    deleteCategory,
    resetCategory
  }
})
