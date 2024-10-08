import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePlateStore = defineStore('plate', () => {
  const plates = ref([])
  const plate = ref({})

  async function getElement(categoryId) {
    const response = await axios.get(`http://localhost:8080/category/${categoryId}`)
    console.log(response.data.plateDtoList)
    plates.value = response.data.platesByCategory
  }

  async function getDetail(plateId) {
    const response = await axios.get(`http://localhost:8080/plate/${plateId}`)
    console.log(response.data)
    plate.value = response.data
  }
  return { plate, plates, getElement, getDetail }
})
