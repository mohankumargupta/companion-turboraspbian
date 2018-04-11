export default {
  /*
  mounted: (userConfig, data) => {
    userConfig.forEach((item) => {
      data.push({ value: item })
    })
  },
  */
  mountList: (config, list, key) => {
    const aptPackages = config[key]
    aptPackages.forEach((aptPackage) => {
      list.push({ value: aptPackage })
    })
  },
  mountChoices: (config, list, key) => {
    const containers = config[key]
    for (const i in containers) {
      list.push({text: i, value: containers[i]})
    }
  },
  approve: (store, router, section) => {
    let s = {}
    s[section] = true
    store.commit('updateSections', s)
    const GO_BACK = -1
    router.go(GO_BACK)
  }
}
