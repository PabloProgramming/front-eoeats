import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import axios from 'axios'
import { usePlateStore } from './plate'

const URL = 'http://localhost:8080'
export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])
  const restaurantId = ref('')
  const category = ref({})
  const plateStore = usePlateStore()
  const { plates } = storeToRefs(plateStore)
  async function getRestaurant() {
    const response = await axios.get(`${URL}/restaurant/e7f9c4a6-b658-4b13-ac15-e2a34eb040e4`)
    console.log(response.data.categoryDtoList)
    categories.value = response.data.categoryDtoList
    restaurantId.value = response.data.id
  }

  async function getCategory(categoryId) {
    const response = await axios.get(`${URL}/category/${categoryId}`)

    plates.value = response.data.platesByCategory
    category.value = response.data
  }

  async function createCategory(newCategory) {
    const response = await axios.post(`${URL}/category`, {
      ...newCategory,
      restaurantId: restaurantId.value
    })
    return response
  }

  async function editCategory(category) {
    const payload = { ...category, restaurantId: restaurantId.value }

    const response = await axios.put(`${URL}/category`, {
      ...payload
    })
    return response
  }

  async function deleteCategory(categoryId) {
    const response = await axios.delete(`${URL}/category/${categoryId}`)
    return response
  }

  return {
    categories,
    category,
    getRestaurant,
    getCategory,
    createCategory,
    editCategory,
    deleteCategory
  }
})
