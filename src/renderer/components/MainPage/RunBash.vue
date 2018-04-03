<template>
<div>
    <router-link :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div>
        <div id="xterm"></div>
    </div>
</div> 
</template>

<script>
export default {
  name: 'runbash',
  mounted: function () {
    // const os = require('os')
    const pty = require('node-pty')
    const Terminal = require('xterm').Terminal

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

    // Setup communication between xterm.js and node-pty
    xterm.on('data', (data) => {
      ptyProcess.write(data)
    })
    ptyProcess.on('data', function (data) {
      xterm.write(data)
    })

    setTimeout(() => ptyProcess.write('ls\r'), 10000)
  }
}
</script>

<style scoped>

</style>