import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ToggleButton from 'vue-js-toggle-button'

import fontawesome from '@fortawesome/fontawesome'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle'
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp'
import faList from '@fortawesome/fontawesome-free-solid/faList'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

fontawesome.library.add(faTh)
fontawesome.library.add(faHome)
fontawesome.library.add(faExclamationTriangle)
fontawesome.library.add(faThumbsUp)
fontawesome.library.add(faList)
fontawesome.library.add(faTrashAlt)

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

const ipcRenderer = require('electron').ipcRenderer

ipcRenderer.on('saveas', () => {
  const {dialog} = require('electron').remote
  const saveFile = dialog.showSaveDialog({
    properties: ['openFile'],
    filters: [
      {
        name: 'Raspberry Pi Settings',
        extensions: ['rpi']
      }]
  })
  if (saveFile !== undefined) {
    const newSettings = store.state.Counter['userconfig']
    const fs = require('fs')
    const yaml = require('js-yaml')
    const newSettingsYAML = yaml.safeDump(newSettings)
    fs.writeFileSync(saveFile, newSettingsYAML)
  }
})
