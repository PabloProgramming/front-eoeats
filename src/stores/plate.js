import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePlateStore = defineStore('category', () => {
  const plates = ref()

  async function getElement(categoryId) {
    const response = await axios.get(`http://localhost:8080/category/${categoryId}`)
    console.log(response.data.plateDtoList)
    plates.value = response.data.platesByCategory
  }

  return { plates, getElement }
})
