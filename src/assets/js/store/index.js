import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const cities = {
  1: 'Berlin Hbf',
  2: 'Bremen Hbf',
  3: 'Düsseldorf Hbf',
  4: 'Dresden Hbf',
  5: 'Essen Hbf',
  6: 'Frankfurt / Main Hbf',
  7: 'Frankfurt / Main Flughafen Fernbahnhof',
  8: 'Hamburg Hbf',
  9: 'Hannover Hbf',
  10: 'Köln Hbf',
  11: 'Leipzig Hbf',
  12: 'Mannheim Hbf',
  13: 'München Hbf',
  14: 'Nürnberg Hbf',
  15: 'Stuttgart Hbf'
}

const store = new Vuex.Store({
  state: {
    currentSite: 'start',
    select: {
      city: null,
      price: 50,
      persons: 1,
      date: { day: 1, month: 5 },
      selected: Object.keys(cities)
    },
    cities
  },
  mutations: {
    SET_DATE (state, payload) {
      state.select.date = payload
    },
    SET_CITY (state, payload) {
      state.select.city = payload
    },
    TOGGLE_SELECT (state, payload) {
      if (state.select.selected.indexOf(payload) > -1) {
        state.select.selected = state.select.selected.filter((key) => {
          return key != payload
        })
      } else {
        state.select.selected.push(payload)
      }
    },
    SET_PERSONS (state, payload) {
      state.select.persons = payload
    },
    SET_PRICE (state, payload) {
      state.select.price = payload
    },
    SELECT_SITE (state, payload) {
      state.currentSite = payload
    }
  }
})

export default store
