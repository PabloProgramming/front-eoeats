import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const URL = 'http://localhost:8080'
export const usePlateStore = defineStore('plate', () => {
  const plates = ref([])
  const plate = ref({})

  async function getPlate(plateId) {
    plate.value = {}
    const response = await axios.get(`${URL}/plate/${plateId}`)
    plate.value = response.data
  }

  async function createPlate(plate) {
    const response = await axios.post(`${URL}/plate`, { ...plate })
    return response
  }

  async function editPlate(plate) {
    const payload = { ...plate }

    const response = await axios.put(`${URL}/plate`, {
      ...payload
    })
    return response
  }

  async function deletePlate(plateId) {
    const response = await axios.delete(`${URL}/plate/${plateId}`)
    return response
  }

  async function resetPlate() {
    plate.value = {}
  }
  return { plate, plates, getPlate, createPlate, resetPlate, deletePlate, editPlate }
})
