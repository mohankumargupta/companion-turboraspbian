const path = require('path')
let dirToDelete = path.resolve(process.env.APPDATA, "Electron", "boo")
console.log(dirToDelete)
const rimraf = require('rimraf')
rimraf.sync(dirToDelete)

const fs = require('fs')
dirToDelete = path.resolve(process.env.APPDATA, "Electron", "storage", "workspacePath.json")
fs.unlinkSync(dirToDelete)