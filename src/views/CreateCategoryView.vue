<script setup>
import NewCategory from '@/components/NewCategory.vue'
import { OK_RESPONSE } from '@/constants'
import { useCategoryStore } from '@/stores/category'
import { usePlateStore } from '@/stores/plate'
import { useRouter } from 'vue-router'

const categoryStore = useCategoryStore()
const plateStore = usePlateStore()
const { resetCategory } = plateStore

resetCategory()

const router = useRouter()
const createCategory = async (newCategory) => {
  const response = await categoryStore.createCategory(newCategory)
  console.log('response', response)

  if (response.status === OK_RESPONSE) {
    router.push(`/`)
  }
}
</script>

<template>
  <NewCategory @new-category-emit="createCategory($event)"> </NewCategory>
</template>

<style></style>
