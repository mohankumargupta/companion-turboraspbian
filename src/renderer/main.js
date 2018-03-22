import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ToggleButton from 'vue-js-toggle-button'

import fontawesome from '@fortawesome/fontawesome'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
fontawesome.library.add(faTh)
fontawesome.library.add(faHome)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ToggleButton)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  render (h) {
    return h('App')
  }
}).$mount('#app')
