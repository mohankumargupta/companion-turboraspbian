import store from '../../store'

export default {
  downloadAndUnzip: () => {
    const pathDir = store.state.Counter.path
    console.log(pathDir)
    const ipcRenderer = require('electron').ipcRenderer
    ipcRenderer.send('downloadrepo', pathDir)
    document.querySelector('.proceedMainInterface').style.display = 'none'
    document.querySelector('.downloadprogress').style.display = 'block'
    document.querySelector('.next').style.display = 'block'
  }
}
