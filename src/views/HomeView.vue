<script setup>
import CategoryCard from '@/components/CategoryCard.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getElement()
})

const toCategotyView = (categoryId) => {
  router.push(`/category/${categoryId}`)
}
const toCreateCategory = () => {
  router.push(`/category`)
}
</script>

<template>
  <PButton label="new category" @Click="toCreateCategory"> </PButton>
  <div class="container">
    <CategoryCard
      v-for="category in categoryStore.categories"
      :key="category.id"
      :category="category"
      class="card"
      @click="toCategotyView(category.id)"
    >
    </CategoryCard>
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
