import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import VueCarousel from '@chenfengyuan/vue-carousel'


library.add(fas)

createApp(App)
    .use(store)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .component(VueCarousel.name, VueCarousel)
    .mount('#app')
