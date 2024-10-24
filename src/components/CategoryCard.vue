<script setup>
defineProps({ category: Object })
</script>

<template>
  <PCard>
    <template #header>
      <PImage :src="category.image" width="200" />
    </template>
    <template #title>{{ category.name }}</template>
  </PCard>
</template>
<style scoped></style>
