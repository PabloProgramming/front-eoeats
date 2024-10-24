<script setup>
import { usePlateStore } from '@/stores/plate'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

defineEmits(['newCategoryEmit', 'editCategoryEmit'])
const plateStore = usePlateStore()
const { category } = storeToRefs(plateStore)
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
      {{ category.id }}
      <div class="formContainer">
        <PInputText v-model="newCategory.image" placeholder="Image" />
        <PInputText v-model="newCategory.name" placeholder="Name" />
      </div>
    </template>
    <template #footer>
      <PButton v-if="category.id" @Click="$emit('editCategoryEmit', payload())" label="Edit" />
      <PButton v-else @Click="$emit('newCategoryEmit', payload())" label="Save" />
    </template>
  </PCard>
</template>
<style scoped>
.formContainer {
  display: flex;
}
</style>
