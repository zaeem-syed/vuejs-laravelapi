import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

//const application


axios.defaults.headers.common['Authorization']="Bearer " +localStorage.getItem('token');
createApp(App).use(router).use(store).mount('#app')
