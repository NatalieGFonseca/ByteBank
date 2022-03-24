import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/styles.css'
import http from '@/http'
import store from './store/index'

Vue.config.productionTip = false

Vue.prototype.$http = http;

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')