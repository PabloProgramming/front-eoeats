<script setup>
defineProps({ plate: Object })
</script>

<template>
  <PCard>
    <template #header>
      <PImage :src="plate.image" width="200" />
    </template>
    <template #title>{{ plate.name }}</template>
  </PCard>
</template>
<style></style>
