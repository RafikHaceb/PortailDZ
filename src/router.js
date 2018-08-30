import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Portal from './components/Portal.vue'
import Home from './components/home/Home.vue'
import Services from './components/Services.vue'
import MySpace from './components/MySpace.vue'
import Appointment from './components/Appointment.vue'
import Contact from './components/Contact.vue'

const routes = [
  {
    path: '/:clientID', component: Portal,
    children : [
      { path: '', redirect: 'accueil' },
      { path: 'accueil', component: Home },
      { path: 'services', component: Services },
      { path: 'mon-espace', component: MySpace },
      { path: 'rdv', component: Appointment },
      { path: 'contact', component: Contact },
    ]
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})
