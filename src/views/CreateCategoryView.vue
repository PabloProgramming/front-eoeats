<script setup>
import NewCategory from '@/components/NewCategory.vue'
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()
</script>

<template>
  <NewCategory @new-category-emit="categoryStore.createCategory($event)"> </NewCategory>
</template>

<style></style>
