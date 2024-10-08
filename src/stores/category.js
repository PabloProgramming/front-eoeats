import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref()

  async function getElement() {
    const response = await axios.get(
      'http://localhost:8080/restaurant/e7f9c4a6-b658-4b13-ac15-e2a34eb040e4'
    )
    console.log(response.data.categoryDtoList)
    categories.value = response.data.categoryDtoList
  }

  return { categories, getElement }
})
