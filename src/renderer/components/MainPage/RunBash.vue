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
    scriptPath = scriptPath.replace('C:', '/mnt/c')
    scriptPath = scriptPath.replace(/\\/g, '/')
    console.log(scriptPath)
    const Terminal = require('xterm').Terminal
    // const fit = require('xterm/lib/addons/fit/fit')
    // console.log(fit)
    // Terminal.applyAddon(fit)

    // const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
    const shell = 'C:\\Windows\\System32\\bash.exe'
    const ptyProcess = pty.spawn(shell, [], {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd: process.cwd(),
      env: process.env
    })

    // Initialize xterm.js and attach it to the DOM
    const xterm = new Terminal({
      cursorBlink: false,
      disableStdin: true
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
      ptyProcess.write('pwd\r')
      // ptyProcess.write('cd "' + scriptPath + '"\r')
      // ptyProcess.write('make setup SUDOPASSWORD=' + sudopassword + '\r')
    }, 1000)
  }
}
</script>

<style scoped>
.xtermWrapper {
  height: 20px;
}
</style>