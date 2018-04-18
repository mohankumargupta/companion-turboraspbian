<template>
<div>
    <router-link :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="xtermWrapper">
        <div id="xterm"></div>
    </div>
</div> 
</template>

<script>

export default {
  name: 'runbash',
  mounted: function () {
    // const os = require('os')
    // const sudopassword = this.$store.state.Counter.sudopassword
    const path = require('path')
    const workspacePath = this.$store.state.Counter.path
    let scriptPath = path.resolve(workspacePath, 'raspberrypi-ansible-master')
    const pty = require('node-pty')

    const Terminal = require('xterm').Terminal
    // const fit = require('xterm/lib/addons/fit/fit')
    // console.log(fit)
    // Terminal.applyAddon(fit)

    const sh = this.$store.state.Counter.shell

    let shell
    let shellArgs
    let setupScript

    if (sh === 'msys64') {
      shell = 'C:\\msys64\\usr\\bin\\bash.exe'
      shellArgs = '--login'
      scriptPath = scriptPath.replace(/\\/g, '/').replace('C:', '/c')

      console.log(scriptPath)
      setupScript = scriptPath + '/setup-msys64.sh'
      console.log(setupScript)
    } else if (sh === 'bashWin') {
      shell = 'C:\\Windows\\System32\\bash.exe'
      shellArgs = ''
    }

    // const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL']
    const ptyProcess = pty.spawn(shell, [shellArgs], {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd: process.cwd(),
      env: process.env
    })

    // Initialize xterm.js and attach it to the DOM
    const xterm = new Terminal({
      cursorBlink: false,
      disableStdin: false
    })
    xterm.open(document.getElementById('xterm'))

    // xterm.fit()

    // Setup communication between xterm.js and node-pty
    xterm.on('data', (data) => {
      ptyProcess.write(data)
    })
    ptyProcess.on('data', function (data) {
      xterm.write(data)
    })

    setTimeout(() => {
      ptyProcess.write('bash ' + setupScript + '\r')
      // ptyProcess.write('cd "' + scriptPath + '"\r')
      // ptyProcess.write('make setup SUDOPASSWORD=' + sudopassword + '\r')
    }, 100)
  }
}
</script>

<style scoped>
 
.xtermWrapper {

}
.xterm-helpers {
  display: none !important;  
}
</style>