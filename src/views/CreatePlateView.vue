<script setup>
import NewPlate from '@/components/NewPlate.vue'
import { OK_RESPONSE } from '@/constants'
import { usePlateStore } from '@/stores/plate'
import { useRouter } from 'vue-router'

const plateStore = usePlateStore()
const { createPlate } = plateStore

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
  <NewPlate @new-plate-emit="handleCreatePlate($event)" />
</template>

<style></style>
