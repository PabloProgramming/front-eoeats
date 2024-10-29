<script setup>
import CategoryCard from '@/components/CategoryCard.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getRestaurant()
})

const toCategotyView = (categoryId) => {
  router.push(`/category/${categoryId}`)
}
const toCreateCategory = () => {
  router.push(`/category`)
}
</script>

<template>
  <div>
    <div class="buttons">
      <PButton label="New category" @Click="toCreateCategory" />
    </div>
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
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
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
