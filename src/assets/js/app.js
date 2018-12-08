import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import VueGeolocation from 'vue-browser-geolocation'

import App from './components/App'

import Start from './components/steps/Start'
import StartLocation from './components/steps/StartLocation'
import DateView from './components/steps/Date'
import Price from './components/steps/Price'
import SelectCities from './components/steps/SelectCities'
import Checkout from './components/steps/Checkout'

Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
Vue.use(VueRouter)
Vue.use(VueGeolocation)

const routes = [
  { path: '/', component: Start },
  { path: '/location', component: StartLocation },
  { path: '/date', component: DateView },
  { path: '/price', component: Price },
  { path: '/cities', component: SelectCities },
  { path: '/checkout', component: Checkout }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const eventHub = new Vue({
  el: '#app',
  components: {
    App
  },
  store,
  router
})

export default eventHub
