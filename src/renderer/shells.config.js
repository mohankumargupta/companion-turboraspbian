export default {
  shells: [
    {
      name: 'msys64',
      platform: 'win32',
      exec: 'C:\\msys64\\usr\\bin\\bash.exe'
    },
    {
      name: 'msys32',
      platform: 'win32',
      exec: 'C:\\msys32\\usr\\bin\\bash.exe'
    },
    {
      name: 'bashWin',
      platform: 'win32',
      exec: 'C:\\Windows\\System32\\bash.exe'
    }
  ],
  getInstalledShells: () => {
    const process = require('process')
    const fs = require('fs')
    let shells
    if (process.platform === 'win32') {
      shells = this.shells.filter((elem) => {
        return elem.platform === 'win32' && fs.existsSync(shellInfo.exec)
      })
    }
    return shells  
  }
}