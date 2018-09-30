import { app } from './app'

// client-specific bootstrapping logic...

const { app } = app()

// this assumes App.vue template root element has `id="app"`
app.$mount('#app')
