import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import Card from 'primevue/card'
import Image from 'primevue/image'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import MultiSelect from 'primevue/multiselect'

import Chip from 'primevue/chip'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.component('PCard', Card)
app.component('PImage', Image)
app.component('PInputText', InputText)
app.component('PButton', Button)
app.component('PFloatLabel', FloatLabel)
app.component('PSelect', Select)
app.component('PCheckbox', Checkbox)
app.component('PMultiSelect', MultiSelect)
app.component('PInputNumber', InputNumber)
app.component('PChip', Chip)
app.mount('#app')
