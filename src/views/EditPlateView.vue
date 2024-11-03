<script setup>
import { BackComponent, NewPlate } from '@/components'
import { OK_RESPONSE } from '@/constants'
import { usePlateStore } from '@/stores'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const plateId = route.params.id
const plateStore = usePlateStore()
const { editPlate, getPlate } = plateStore
onMounted(async () => {
  await getPlate(plateId)
})
const handleEditPlate = async (plate) => {
  const newPlate = { ...plate, id: plateId }
  const response = await editPlate(newPlate)

  if (response.status === OK_RESPONSE) {
    router.push(`/plate/${plateId}`)
  }
}
</script>

<template>
  <div class="header">
    <BackComponent url="/" />
  </div>
  <NewPlate @edit-plate-emit="handleEditPlate($event)" />
</template>

<style scoped>
.header {
  height: 50px;
  position: relative;
}
</style>
