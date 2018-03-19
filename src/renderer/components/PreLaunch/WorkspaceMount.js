import store from '../../store'

export default {
  updateWorkspacePath: () => {
    const newPath = document.querySelector('[name=workspacepath]').value
    store.commit('updatePath', newPath)
  },
  mounted: () => {
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
