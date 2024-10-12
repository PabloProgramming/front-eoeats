<script setup>
defineEmits(['newCategoryEmit'])
const newCategory = { image: '', name: '' }
</script>

<template>
  <PCard>
    <template #content>
      <PFloatLabel>
        <PInputText id="image" v-model="newCategory.image" />
        <label for="image">image</label>
      </PFloatLabel>
      <PFloatLabel>
        <PInputText id="name" v-model="newCategory.name" />
        <label for="name">name</label>
      </PFloatLabel>
      <PButton @Click="$emit('newCategoryEmit', newCategory)" label="save" />
    </template>
  </PCard>
</template>
<style></style>
