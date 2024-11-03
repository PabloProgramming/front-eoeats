<script setup>
import { BackComponent, PlateCard } from '@/components'
import { OK_RESPONSE } from '@/constants'
import { useCategoryStore } from '@/stores/category'
import { usePlateStore } from '@/stores/plate'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const categoryId = route.params.id
const plateStore = usePlateStore()
const categoryStore = useCategoryStore()
const { deleteCategory, getCategory } = categoryStore
const { plates } = storeToRefs(plateStore)
const { category } = storeToRefs(categoryStore)
onMounted(() => {
  getCategory(categoryId)
})

const toPlateView = (plateId) => {
  router.push(`/plate/${plateId}`)
}
const toEditCategoryView = () => {
  router.push(`/category/edit/${categoryId}`)
}
const handleDeleteCategory = async () => {
  const response = await deleteCategory(categoryId)

  console.log(response)
  if (response.status === OK_RESPONSE) {
    router.push(`/`)
  }
}

const toCreatePlate = () => {
  router.push(`/plate`)
}
</script>

<template>
  <div class="info">
    <BackComponent url="/" />
    <h2 class="title">{{ category.name }}</h2>
    <div class="buttons">
      <PButton icon="pi pi-trash" label="Delete" severity="danger" @Click="handleDeleteCategory" />
      <PButton icon="pi pi-pencil" label="Edit" severity="warn" @Click="toEditCategoryView" />
      <PButton label="New plate" @Click="toCreatePlate" />
    </div>
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
  position: relative;
}
.buttons {
  position: absolute;
  right: 0;
  display: flex;
  gap: 10px;
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
