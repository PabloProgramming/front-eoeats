<script setup>
import { useCounterStore } from '@/stores/category'
const store = useCounterStore()
store.getElement()
</script>

<template>
  Hola mundo
  <PCard> Pepito </PCard>
</template>
