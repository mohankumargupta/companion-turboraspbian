export default {
  mounted: (userConfig, data) => {
    userConfig.forEach((item) => {
      data.push({ value: item })
    })
  },
  approve: (store, router, section) => {
    let s = {}
    s[section] = true
    store.commit('updateSections', s)
    const GO_BACK = -1
    router.go(GO_BACK)
  }
}
