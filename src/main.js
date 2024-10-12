import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import router from './router'
import Card from 'primevue/card'
import Image from 'primevue/image'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
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
app.mount('#app')
