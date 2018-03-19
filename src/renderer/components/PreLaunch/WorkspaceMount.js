import store from '../../store'

export default {
  updated: () => {
    let path
    const dialog = require('electron').remote.dialog
    const storage = require('electron-json-storage')
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.browse').addEventListener('click', () => {
        path = dialog.showOpenDialog({properties: ['openDirectory']})
        if (path !== undefined) {
          path = path[0]
          storage.set('workspacePath', {path: path})
          store.commit('updatePath', path)
          document.querySelector('[name=workspacepath]').value = path
        }
      })
    })
  }
}

/*
export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    let path = ''
    const storage = require('electron-json-storage')
    const ipcRenderer = require('electron').ipcRenderer
    const remote = require('electron').remote

    document.querySelector('.browse').addEventListener('click', () => {
      const dialog = require('electron').remote.dialog
      path = dialog.showOpenDialog({properties: ['openDirectory']})
      storage.set('workspacePath', {path: path})
      document.querySelector('[name=workspacepath]').value = path
    })

    document.querySelector('.step1_button').addEventListener('click', () => {
      const arg = {
        navigate: 'gitclone',
        path: path,
        skip: false
      }
      ipcRenderer.send('navigate', arg)
      remote.getCurrentWindow().close()
    })
  })
}
*/
