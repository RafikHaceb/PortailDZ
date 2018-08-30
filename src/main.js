import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { Carousel, CarouselItem, Card } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import firebase from 'firebase'
import VueFire from 'vuefire'

import router from './router'
import store from './store/index'
import serverConfig from './serverConfig'

import App from './App.vue'

Vue.use(Vuetify);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(VueFire);

firebase.initializeApp(serverConfig);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
