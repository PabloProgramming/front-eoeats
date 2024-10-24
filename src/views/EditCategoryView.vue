<script setup>
import NewCategory from '@/components/NewCategory.vue'
import { OK_RESPONSE } from '@/constants'
import { useCategoryStore } from '@/stores/category'
import { usePlateStore } from '@/stores/plate'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const categoryId = route.params.id
const categoryStore = useCategoryStore()
const plateStore = usePlateStore()
const { editCategory } = categoryStore
const { getElement } = plateStore
onMounted(async () => {
  await getElement(categoryId)
})
const handleEditCategory = async (category) => {
  const newCategory = { ...category, id: categoryId }
  const response = await editCategory(newCategory)
  console.log('response', response)

  if (response.status === OK_RESPONSE) {
    router.push(`/category/${categoryId}`)
  }
}
</script>

<template>
  <NewCategory @edit-category-emit="handleEditCategory($event)"> </NewCategory>
</template>

<style></style>
