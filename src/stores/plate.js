import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePlateStore = defineStore('plate', () => {
  const plates = ref([])
  const plate = ref({})
  const category = ref({})

  function resetCategory() {
    category.value = {}
  }

  async function getElement(categoryId) {
    const response = await axios.get(`http://localhost:8080/category/${categoryId}`)

    plates.value = response.data.platesByCategory
    category.value = response.data
  }

  async function getDetail(plateId) {
    const response = await axios.get(`http://localhost:8080/plate/${plateId}`)
    console.log(response.data)
    plate.value = response.data
  }
  return { plate, plates, category, getElement, getDetail, resetCategory }
})
