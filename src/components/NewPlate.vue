<script setup>
import { PLATE_TYPES } from '@/constants'
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
  isAvailable: true,
  isKitchenPrinter: false,
  description: ''
}

const newPlate = ref(plate.value?.id ? { ...plate.value } : { ...initPlate })

const payload = () => {
  return {
    image: newPlate.value.image,
    name: newPlate.value.name,
    price: newPlate.value.price,
    type: Number(newPlate.value.type),
    categoryId: category.value.id,
    isAvailable: newPlate.value.available,
    isKitchenPrinter: newPlate.value.isKitchenPrinter,
    description: newPlate.value.description
  }
}
</script>

<template>
  <PCard>
    <template #content>
      <div class="formContainer">
        <PInputText v-model="newPlate.image" placeholder="Url image" />
        <PInputText v-model="newPlate.name" placeholder="Name" />
        <PInputText v-model="newPlate.description" placeholder="Description" />

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
        <div class="checkbox">
          <PCheckbox v-model="newPlate.available" inputId="isAvailable" name="isAvailable" binary />
          <label for="isAvailable" class="ml-2">Available</label>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="buttonContainer">
        <PButton v-if="plate.id" @Click="$emit('editPlateEmit', payload())" label="Edit" />
        <PButton v-else @Click="$emit('newPlateEmit', payload())" label="Save" />
      </div>
    </template>
  </PCard>
</template>

<style scoped>
.buttonContainer {
  display: flex;
  justify-content: end;
}
.checkbox {
  display: flex;
  align-items: center;
  gap: 5px;
}
.formContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}
.formContainer > * {
  width: 250px;
}
</style>
