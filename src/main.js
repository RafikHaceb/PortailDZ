import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'

import router from './router'
import store from './store/index'

import App from './App.vue'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
