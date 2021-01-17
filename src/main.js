import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './router'
import store from './store'
//import BootstrapVue from "bootstrap-vue"
//import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap-vue/dist/bootstrap-vue.css"
createApp(App).use(store).use(router).mount('#app')
