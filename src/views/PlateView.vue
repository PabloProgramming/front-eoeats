<script setup>
import PlateDetail from '@/components/PlateDetail.vue'
import { usePlateStore } from '@/stores/plate'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const plateId = route.params.id
const plateStore = usePlateStore()
onMounted(() => {
  plateStore.getDetail(plateId)
})
</script>

<template>
  <div class="container">
    <PlateDetail :plate="plateStore.plate"> </PlateDetail>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.card {
  width: 200px;
}
</style>
