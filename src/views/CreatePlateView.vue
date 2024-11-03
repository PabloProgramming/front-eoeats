<script setup>
import { BackComponent, NewPlate } from '@/components'
import { OK_RESPONSE } from '@/constants'
import { usePlateStore } from '@/stores/plate'
import { useRouter } from 'vue-router'

const plateStore = usePlateStore()
const { createPlate, resetPlate } = plateStore
resetPlate()
const router = useRouter()
const handleCreatePlate = async (newPlate) => {
  const response = await createPlate(newPlate)
  console.log('response', response)

  if (response.status === OK_RESPONSE) {
    router.push(`/`)
  }
}
</script>

<template>
  <div class="header">
    <BackComponent url="/" />
  </div>
  <NewPlate @new-plate-emit="handleCreatePlate($event)" />
</template>

<style scoped>
.header {
  height: 50px;
  position: relative;
}
</style>
