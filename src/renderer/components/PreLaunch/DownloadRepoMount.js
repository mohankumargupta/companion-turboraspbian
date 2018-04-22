import store from '../../store'

export default {
  downloadRepo: async function (axios) {
    // const path = require('path')
    // const fs = require('fs')
    return axios.get('https://github.com/mohankumargupta/raspberrypi-ansible/archive/master.zip', {
      responseType: 'arraybuffer',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/zip'
      }
    })
    /*
      const pathDir = store.state.Counter.path
      const outputFilename = pathDir + path.sep + 'master.zip'
      fs.writeFileSync(outputFilename, result.data)
      const unzip = require('node-unzip-2')
      console.log(pathDir)
      console.log(outputFilename)
      fs.createReadStream(outputFilename).pipe(unzip.Extract({ path: pathDir }))
      console.log('unzipping done')
    */
  },
  unzipRepo: function (zipdata, workspacePath) {
    const fs = require('fs')
    const path = require('path')
    const outputFilename = workspacePath + path.sep + 'master.zip'
    console.log(workspacePath)
    console.log(outputFilename)
    fs.writeFileSync(outputFilename, zipdata)
    const unzip = require('node-unzip-2')
    fs.createReadStream(outputFilename).pipe(unzip.Extract({ path: workspacePath }))
    console.log('unzipping done')
  },
  downloadAndUnzip: function () {
    const pathDir = store.state.Counter.path
    const ipcRenderer = require('electron').ipcRenderer
    ipcRenderer.send('downloadrepo', pathDir)
    // document.querySelector('.proceedMainInterface').style.display = 'none'
    // document.querySelector('.downloadprogress').style.display = 'block'
    // document.querySelector('.next').style.display = 'block'
    return true
  }
}
