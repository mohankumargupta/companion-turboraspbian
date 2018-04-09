import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ToggleButton from 'vue-js-toggle-button'

import fontawesome from '@fortawesome/fontawesome'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle'
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp'
import faList from '@fortawesome/fontawesome-free-solid/faList'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'
import faFighterJet from '@fortawesome/fontawesome-free-solid/faFighterJet'
import faCheckCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle'
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle'

fontawesome.library.add(faTh)
fontawesome.library.add(faHome)
fontawesome.library.add(faExclamationTriangle)
fontawesome.library.add(faThumbsUp)
fontawesome.library.add(faList)
fontawesome.library.add(faTrashAlt)
fontawesome.library.add(faFighterJet)
fontawesome.library.add(faCheckCircle)
fontawesome.library.add(faTimesCircle)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ToggleButton)
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  render (h) {
    return h('App')
  }
}).$mount('#app')

function save (store, saveFile) {
  const storage = require('electron-json-storage')
  storage.get('workspacePath', (error, data) => {
    if (error) {
      return
    }
    const workspacePath = data.path
    const path = require('path')
    const hostsFile = path.resolve(workspacePath, 'raspberrypi-ansible-master', 'hosts')
    const newHosts = store.state.Counter['hosts']
    console.log(newHosts)
    console.log(hostsFile)
    const ini = require('ini')
    const fs = require('fs')
    fs.writeFileSync(hostsFile, ini.stringify(newHosts))
    const newSettings = store.state.Counter['userconfig']
    console.log(newSettings)
    const yaml = require('js-yaml')
    const newSettingsYAML = yaml.safeDump(newSettings)
    let newSaveFile
    if (saveFile === undefined) {
      newSaveFile = path.resolve(workspacePath, 'raspberrypi-ansible-master', 'group_vars', 'raspberrypis.yml')
    } else {
      newSaveFile = saveFile
    }
    fs.writeFileSync(newSaveFile, newSettingsYAML)
  })
}

const ipcRenderer = require('electron').ipcRenderer

ipcRenderer.on('save', () => {
  save(store, undefined)
})

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
    save(store, saveFile)
  }
})
