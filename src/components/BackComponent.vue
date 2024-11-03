<script setup>
defineProps({ url: String })
</script>

<template>
  <PButton
    class="button"
    severity="secondary"
    icon="pi pi-arrow-left"
    @click="$router.push(`${url}`)"
  />
</template>
<style scoped>
.button {
  position: absolute;
  left: 0;
}
</style>
