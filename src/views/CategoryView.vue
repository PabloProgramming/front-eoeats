<script setup>
import PlateCard from '@/components/PlateCard.vue'
import { usePlateStore } from '@/stores/plate'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const categoryId = route.params.id
const plateStore = usePlateStore()
onMounted(() => {
  plateStore.getElement(categoryId)
})

const toPlateView = (plateId) => {
  console.log('hola')
  router.push(`/plate/${plateId}`)
}
</script>

<template>
  <div class="container">
    <PlateCard
      v-for="plate in plateStore.plates"
      :key="plate.id"
      :plate="plate"
      class="card"
      @click="toPlateView(plate.id)"
    >
    </PlateCard>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.card {
  width: 200px;
}
</style>
