<script setup>
import { AVAILABLE, CURRENCY, NOT_AVAILABLE, PLATE_TYPES } from '@/constants'
import { computed } from 'vue'

const { plate } = defineProps({ plate: Object })

const plateType = computed(() => {
  const typeMatched = PLATE_TYPES.find((type) => {
    return type.code === plate.type
  })
  return typeMatched.name
})
</script>

<template>
  <PCard>
    <template #content>
      <div class="container">
        <PImage :src="plate.image" width="200" />
        <div class="info">
          <span>{{ plate.price }} {{ CURRENCY }}</span>
          <PChip :label="plateType" />
          <PChip :label="plate.available ? AVAILABLE : NOT_AVAILABLE" />
        </div>
      </div>
    </template>
  </PCard>
</template>
<style scoped>
.container {
  display: flex;
}
.info {
  margin-left: 15px;
}

.info > * {
  margin: 0 7px;
}
</style>
