<script setup>
import { BackComponent, NewCategory } from '@/components'
import { OK_RESPONSE } from '@/constants'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const categoryId = route.params.id
const categoryStore = useCategoryStore()
const { editCategory, getCategory } = categoryStore
onMounted(async () => {
  await getCategory(categoryId)
})
const handleEditCategory = async (category) => {
  const newCategory = { ...category, id: categoryId }
  const response = await editCategory(newCategory)

  if (response.status === OK_RESPONSE) {
    router.push(`/category/${categoryId}`)
  }
}
</script>

<template>
  <div class="header">
    <BackComponent url="/" />
  </div>
  <NewCategory @edit-category-emit="handleEditCategory($event)"> </NewCategory>
</template>

<style scoped>
.header {
  height: 50px;
  position: relative;
}
</style>
