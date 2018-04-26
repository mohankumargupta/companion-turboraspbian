export default {
  shells: [
    {
      name: 'msys64',
      family: 'msys2',
      platform: 'win32',
      exec: 'C:\\msys64\\usr\\bin\\bash.exe',
      args: ['--login'],
      c: '/c',
      setup: 'bash setup-msys.sh'
    },
    {
      name: 'msys32',
      family: 'msys2',
      platform: 'win32',
      exec: 'C:\\msys32\\usr\\bin\\bash.exe',
      args: ['--login'],
      c: '/c',
      setup: 'bash setup-msys.sh'
    },
    {
      name: 'bashWin',
      platform: 'win32',
      exec: 'C:\\Windows\\System32\\bash.exe',
      args: ['--login'],
      setup: 'lxrun /setdefaultuser root',
      c: '/mnt/c'
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
  },
  preferredShell: function () {
    if (this.hasShell()) {
      return this.getInstalledShells()[0]
    }

    return undefined
  }
}
