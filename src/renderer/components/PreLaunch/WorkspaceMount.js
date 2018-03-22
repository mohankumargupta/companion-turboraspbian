import store from '../../store'

export default {
  openFolderDialog: (store) => {
    let path
    const dialog = require('electron').remote.dialog
    const storage = require('electron-json-storage')
    path = dialog.showOpenDialog({properties: ['openDirectory']})
    if (path !== undefined) {
      path = path[0]
      storage.set('workspacePath', {path: path})
      store.commit('updatePath', path)
      document.querySelector('[name=workspacepath]').value = path
    }
  },
  updateWorkspacePath: () => {
    const newPath = document.querySelector('[name=workspacepath]').value
    const storage = require('electron-json-storage')
    storage.set('workspacePath', {path: newPath})
    store.commit('updatePath', newPath)
  }
}
