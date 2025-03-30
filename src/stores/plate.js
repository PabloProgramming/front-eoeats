import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api' // Use API instance instead of axios

export const usePlateStore = defineStore('plate', () => {
  const plates = ref([])
  const plate = ref({})

  async function getPlate(plateId) {
    plate.value = {}
    const response = await api.get(`/plate/${plateId}`)
    plate.value = response.data
  }

  async function createPlate(newPlate) {
    const response = await api.post('/plate', { ...newPlate })
    return response
  }

  async function editPlate(updatedPlate) {
    const response = await api.put('/plate', { ...updatedPlate })
    return response
  }

  async function deletePlate(plateId) {
    const response = await api.delete(`/plate/${plateId}`)
    return response
  }

  async function resetPlate() {
    plate.value = {}
  }

  return { plate, plates, getPlate, createPlate, resetPlate, deletePlate, editPlate }
})
