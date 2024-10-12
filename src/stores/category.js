import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref()
  const restaurantId = ref()

  async function getElement() {
    const response = await axios.get(
      'http://localhost:8080/restaurant/e7f9c4a6-b658-4b13-ac15-e2a34eb040e4'
    )
    console.log(response.data.categoryDtoList)
    categories.value = response.data.categoryDtoList
    restaurantId.value = response.data.id
  }
  async function createCategory(newCategory) {
    const response = await axios.post('http://localhost:8080/category', {
      ...newCategory,
      restaurantId: restaurantId.value
    })
  }

  return { categories, getElement, createCategory }
})
