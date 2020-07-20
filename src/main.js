// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDpHoMlWzIafcPb50YNFHS_ZSZjYf7AVXU',
    libraries: 'places' // necessary for places input
  }
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    location: 'Colombia',
    userlocation: { lat: 4.6193564, lng: -74.0841302 },
    service: '',
    located: false,
    address: null,
    locations: [],
    stores: [],
    allstores: false
  },
  getters: {
    getFilteredStores (state) {
      if (state.allstores) {
        return state.stores.filter(store => store.location.includes(state.location) && store.services.includes(state.service))
      } else {
        return state.stores.filter(store => store.location.includes(state.location) && store.services.includes(state.service)).slice(0,7)
      }
    },
    getStore (state, name) {
      return state.stores.filter(store => store.name === name)
    }
  },
  mutations: {
    setLocation (state, location) {
      state.location = location
    },
    setAddress (state, address) {
      console.log(address)
      state.address = address
    },
    addLocations (state, locations) {
      state.locations = locations
    },
    addStores (state, stores) {
      state.stores = stores
    },
    setLocated (state) {
      state.located = true
    },
    setService (state, service) {
      state.service = service
    },
    setUserLocation (state, position) {
      state.userlocation = position
    },
    toogleAllStores (state) {
      state.allstores = !state.allstores
    }
  }
})

Vue.use(VueScrollTo)


//and then use it in main.js
Vue.use(VueAnalytics, { id: 'UA-172343507-1', router })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
