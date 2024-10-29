<script setup>
import { ALLERGENS_TYPES, PLATE_TYPES } from '@/constants'
import { useCategoryStore } from '@/stores'
import { usePlateStore } from '@/stores/plate'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

defineEmits(['newPlateEmit', 'editPlateEmit'])
const plateStore = usePlateStore()
const categoryStore = useCategoryStore()
const { plate } = storeToRefs(plateStore)
const { category } = storeToRefs(categoryStore)
const initPlate = {
  image: '',
  name: '',
  price: 0,
  type: null,
  categoryId: category.value.id,
  allergens: [],
  isAvailable: true,
  isKitchenPrinter: false
}
const newPlate = ref(plate.value?.id ? { ...plate.value } : { ...initPlate })
const payload = () => {
  return {
    image: newPlate.value.image,
    name: newPlate.value.name,
    price: newPlate.value.price,
    type: Number(newPlate.value.type),
    categoryId: category.value.id,
    allergens: newPlate.value.allergens,
    isAvailable: newPlate.value.isAvailable,
    isKitchenPrinter: newPlate.value.isKitchenPrinter
  }
}
</script>

<template>
  <PCard>
    <template #content>
      {{ plate.id }}
      <div class="formContainer">
        <PInputText v-model="newPlate.image" placeholder="Url image" />
        <PInputText v-model="newPlate.name" placeholder="Name" />
        <PInputNumber
          v-model="newPlate.price"
          :minFractionDigits="2"
          :maxFractionDigits="2"
          placeholder="Price"
        />
        <PSelect
          v-model="newPlate.type"
          :options="PLATE_TYPES"
          optionLabel="name"
          optionValue="code"
          placeholder="Type"
        />
        <PMultiSelect
          v-model="newPlate.allergens"
          :options="ALLERGENS_TYPES"
          optionLabel="name"
          optionValue="code"
          placeholder="Allergen"
        />
        <div class="flex items-center">
          <PCheckbox
            v-model="newPlate.isAvailable"
            inputId="isAvailable"
            name="isAvailable"
            binary
          />
          <label for="isAvailable" class="ml-2"> Available</label>
        </div>
      </div>
    </template>
    <template #footer>
      <PButton v-if="plate.id" @Click="$emit('editPlateEmit', payload())" label="Edit" />
      <PButton v-else @Click="$emit('newPlateEmit', payload())" label="Save" />
    </template>
  </PCard>
</template>
<style scoped>
.formContainer {
  display: flex;
  gap: 15px;
}
</style>
