import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './components/Home.vue'
import Services from './components/Services.vue'
import MySpace from './components/MySpace.vue'
import Appointment from './components/Appointment.vue'
import Contact from './components/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/mon-espace', component: MySpace },
  { path: '/rdv', component: Appointment },
  { path: '/contact', component: Contact },
]

export default new VueRouter({ routes })
