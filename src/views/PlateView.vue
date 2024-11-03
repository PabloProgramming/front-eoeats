<script setup>
import { BackComponent, PlateDetail } from '@/components'
import { OK_RESPONSE } from '@/constants'
import { usePlateStore } from '@/stores/plate'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const plateId = route.params.id
const plateStore = usePlateStore()
const { plate } = storeToRefs(plateStore)
const { getPlate, deletePlate } = plateStore
onMounted(() => {
  getPlate(plateId)
})

const handleDeletePlate = async () => {
  const response = await deletePlate(plateId)

  console.log(response)
  if (response.status === OK_RESPONSE) {
    router.push(`/`)
  }
}
const toEditPlateView = () => {
  router.push(`/plate/edit/${plateId}`)
}
</script>

<template>
  <div class="info">
    <BackComponent url="/" />
    <h2 class="title">{{ plate?.name }}</h2>
    <div class="buttons">
      <PButton icon="pi pi-trash" label="Delete" severity="danger" @Click="handleDeletePlate" />
      <PButton icon="pi pi-pencil" label="Edit" severity="warn" @Click="toEditPlateView" />
    </div>
  </div>
  <div class="container">
    <PlateDetail v-if="plate?.id" :plate="plate"> </PlateDetail>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
}
.buttons {
  position: absolute;
  right: 0;
  display: flex;
  gap: 10px;
}
</style>
