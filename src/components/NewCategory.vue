<script setup>
import { useCategoryStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
defineEmits(['newCategoryEmit', 'editCategoryEmit'])
const categoryStore = useCategoryStore()
const { category } = storeToRefs(categoryStore)
const initCategory = { image: '', name: '' }
const newCategory = ref(category.value?.id ? { ...category.value } : { ...initCategory })
const payload = () => {
  return {
    image: newCategory.value.image,
    name: newCategory.value.name
  }
}
</script>

<template>
  <PCard>
    <template #content>
      <div class="formContainer">
        <PInputText v-model="newCategory.image" placeholder="Image" />
        <PInputText v-model="newCategory.name" placeholder="Name" />
      </div>
    </template>
    <template #footer>
      <div class="buttonContainer">
        <PButton v-if="category.id" @Click="$emit('editCategoryEmit', payload())" label="Edit" />
        <PButton v-else @Click="$emit('newCategoryEmit', payload())" label="Save" />
      </div>
    </template>
  </PCard>
</template>
<style scoped>
.formContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.buttonContainer {
  display: flex;
  justify-content: end;
}
</style>
