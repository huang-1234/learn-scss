import Vue from 'vue'
import App from './App.vue'
import '@assets/global.css'
Vue.config.productionTip = false
import router from './routers'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
