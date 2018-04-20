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
  getInstalledShells: function () {
    const process = require('process')
    const fs = require('fs')
    const currentOS = process.platform
    const shells = this.shells.filter((shellInfo) => {
      return shellInfo.platform === currentOS && fs.existsSync(shellInfo.exec)
    })
    return shells
  },
  hasShell: function () {
    return this.getInstalledShells().length > 0
  }
}
