import store from '../../store'

export default {
  openFolderDialog: (store, profileDirectory) => {
    let path
    const dialog = require('electron').remote.dialog
    path = dialog.showOpenDialog({
      properties: ['openDirectory'],
      defaultPath: profileDirectory
    })
    if (path !== undefined) {
      path = path[0]
      return path
    }
    return undefined
  },
  updateWorkspacePath: () => {
    const newPath = document.querySelector('[name=workspacepath]').value
    const storage = require('electron-json-storage')
    storage.set('workspacePath', {path: newPath})
    store.commit('updatePath', newPath)
  }
}
