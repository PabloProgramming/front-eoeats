<script setup>
defineProps({ category: Object })
</script>

<template>
  <PCard>
    <template #title>{{ category.name }}</template>
    <template #content> <PImage :src="category.image" width="200" /></template>
  </PCard>
</template>
<style></style>
