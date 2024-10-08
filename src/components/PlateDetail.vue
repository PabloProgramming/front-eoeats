<script setup>
defineProps({ plate: Object })
</script>

<template>
  <PCard>
    <template #title>{{ plate.name }} </template>
    <template #content>
      {{ plate.price }} {{ plate.available }}<PImage :src="plate.image" width="200"
    /></template>
  </PCard>
</template>
<style></style>
