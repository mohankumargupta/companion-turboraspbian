'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    show: false
  })

  setTimeout(() => mainWindow.maximize(), 5000)
  // mainWindow.on('ready-to-show', () => mainWindow.maximize())
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

function downloadRepo (arg) {
  const axios = require('axios')
  const path = require('path')
  const fs = require('fs')
  axios.request({
    responseType: 'arraybuffer',
    url: 'https://github.com/mohankumargupta/raspberrypi-ansible/archive/master.zip',
    method: 'get',
    headers: {
      'Content-Type': 'application/zip'
    }
  }).then((result) => {
    const outputFilename = arg + path.sep + 'master.zip'
    fs.writeFileSync(outputFilename, result.data)
    const unzip = require('node-unzip-2')
    console.log(arg)
    console.log(outputFilename)
    fs.createReadStream(outputFilename).pipe(unzip.Extract({ path: arg }))
    console.log('unzipping done')
  })
}

ipcMain.on('downloadrepo', (event, arg) => {
  console.log('hit')
  downloadRepo(arg)
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
