export default function xtermSetup () {
  var pty = require('node-pty')
  var Terminal = require('xterm').Terminal

  // Initialize node-pty with an appropriate shell
  // const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
  const shell = 'c:\\Windows\\System32\\bash.exe'
  const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.cwd(),
    env: process.env
  })

  // Initialize xterm.js and attach it to the DOM
  const xterm = new Terminal()
  xterm.open(document.getElementById('xterm'))

  // Setup communication between xterm.js and node-pty
  xterm.on('data', (data) => {
    ptyProcess.write(data)
  })

  ptyProcess.on('data', function (data) {
    xterm.write(data)
  })

  ptyProcess.write('ls\r\n')
}
