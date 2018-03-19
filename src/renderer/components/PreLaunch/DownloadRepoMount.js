import store from '../../store'

export default {
  mounted: () => {
    const pathDir = store.state.Counter.path
    console.log(pathDir)
    const ipcRenderer = require('electron').ipcRenderer
    ipcRenderer.send('downloadrepo', pathDir)
  }
}
