<script setup>
import PlateCard from '@/components/PlateCard.vue'
import { usePlateStore } from '@/stores/plate'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const categoryId = route.params.id
const plateStore = usePlateStore()
const { category, plates } = storeToRefs(plateStore)
const { getElement } = plateStore
onMounted(() => {
  getElement(categoryId)
})

const toPlateView = (plateId) => {
  router.push(`/plate/${plateId}`)
}
const toEditCategoryView = () => {
  router.push(`/category/edit/${categoryId}`)
}
</script>

<template>
  <div class="info">
    <h2 class="title">{{ category.name }}</h2>
    <PButton class="editButton" icon="pi pi-pencil" label="Edit" @Click="toEditCategoryView" />
  </div>
  <div class="container">
    <PlateCard
      v-for="plate in plates"
      :key="plate.id"
      :plate="plate"
      class="card"
      @click="toPlateView(plate.id)"
    >
    </PlateCard>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.title {
  margin-left: auto;
}
.editButton {
  margin-left: auto;
}
.container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
}
.card {
  width: 200px;
}
</style>
