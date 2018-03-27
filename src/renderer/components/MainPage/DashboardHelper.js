export default {
  mounted: (store) => {
    if (store.path === undefined) {
      const storage = require('electron-json-storage')
      storage.get('workspacePath', (error, data) => {
        if (error) {
          return
        }
        const workspacePath = data.path
        const path = require('path')
        const pathToConfig = path.resolve(workspacePath, 'raspberrypi-ansible-master', 'group_vars', 'raspberrypis.yml')
        const fs = require('fs')
        const yaml = require('js-yaml')
        const userdatayaml = fs.readFileSync(pathToConfig, 'utf-8')
        const userconfig = yaml.safeLoad(userdatayaml)
        store.commit('updateUserConfig', userconfig)
        const ini = require('ini')
        const hostsFile = path.resolve(workspacePath, 'raspberrypi-ansible-master', 'hosts')
        const hosts = ini.parse(fs.readFileSync(hostsFile, 'utf-8'))
        console.log(hosts)
        store.commit('updateHosts', hosts)
      })
    }
    console.log(store)
  }
}
