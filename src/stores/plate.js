import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const URL = 'http://localhost:8080'
export const usePlateStore = defineStore('plate', () => {
  const plates = ref([])
  const plate = ref({})

  async function getDetail(plateId) {
    const response = await axios.get(`${URL}/plate/${plateId}`)
    plate.value = response.data
  }

  async function createPlate(plate) {
    const response = await axios.post(`${URL}/plate`, { ...plate })
    return response
  }
  return { plate, plates, getDetail, createPlate }
})
