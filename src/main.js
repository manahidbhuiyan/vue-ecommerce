import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import '../src/design/index.scss'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Tiny Slider
import VueTinySlider from 'vue-tiny-slider';
import "tiny-slider/src/tiny-slider.scss";

Vue.component("tiny-slider", VueTinySlider);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  router,
  'tiny-slider': VueTinySlider,
  render: h => h(App)
}).$mount('#app')
