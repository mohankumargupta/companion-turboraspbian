<template>
<div>
    <router-link :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="xtermWrapper">
        <div id="xterm"></div>
    </div>
</div> 
</template>

<script>
import Shells from '@/shells.config'
export default {
  name: 'runbash',
  mounted: function () {
    const path = require('path')
    const workspacePath = this.$store.state.Counter.path
    let scriptPath = path.resolve(workspacePath, 'raspberrypi-ansible-master')
    const pty = require('node-pty')

    const Terminal = require('xterm').Terminal

    let shellInfo = {
      name: '',
      platform: '',
      exec: '',
      args: ''
    }
    shellInfo = {...Shells.preferredShell()}
    console.log(shellInfo)
    scriptPath = scriptPath.replace(/\\/g, '/').replace('C:', shellInfo.c)
    console.log(scriptPath)
    const ptyProcess = pty.spawn(shellInfo.exec, shellInfo.args, {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd: process.cwd(),
      env: process.env
    })
    // Initialize xterm.js and attach it to the DOM
    const xterm = new Terminal({
      cursorBlink: true,
      disableStdin: false
    })
    xterm.open(document.getElementById('xterm'))

    // Setup communication between xterm.js and node-pty
    xterm.on('data', (data) => {
      ptyProcess.write(data)
    })
    ptyProcess.on('data', function (data) {
      xterm.write(data)
    })

    setTimeout(() => {
      ptyProcess.write('cd "' + scriptPath + '"\r')
      ptyProcess.write(shellInfo.setup + '\r')
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