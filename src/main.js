import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost'
axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  'Content-Type': 'application/json',
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
