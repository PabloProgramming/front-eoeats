<script setup>
import { BackComponent, NewCategory } from '@/components'
import { OK_RESPONSE } from '@/constants'
import { useCategoryStore } from '@/stores/category'
import { useRouter } from 'vue-router'

const categoryStore = useCategoryStore()
const { resetCategory } = categoryStore
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
  <div class="header">
    <BackComponent url="/" />
  </div>
  <NewCategory @new-category-emit="createCategory($event)"> </NewCategory>
</template>

<style scoped>
.header {
  height: 50px;
  position: relative;
}
</style>
