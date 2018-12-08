import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import VueScrollTo from 'vue-scrollto'

import App from './components/App'
import Surprise from './components/Surprise'

Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
Vue.use(VueRouter)
Vue.use(VueScrollTo)

const routes = [
  { path: '/', component: Surprise }
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
