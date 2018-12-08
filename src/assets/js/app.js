import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import App from './components/App'
import Surprise from './components/Surprise'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Surprise }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.prototype.$eventHub = new Vue({
  el: '#app',
  components: {
    App
  },
  store,
  router
})
