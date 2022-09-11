import { createApp } from 'vue'
import wrapper from './wrapper.vue'
import router from './router/router'
import store from './store/store'

createApp(wrapper).use(router).use(store).mount('#app')
