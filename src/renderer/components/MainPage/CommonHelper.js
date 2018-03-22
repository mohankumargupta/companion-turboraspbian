export default {
  approve: (store, router, section) => {
    let s = {}
    s[section] = true
    console.log(s)
    store.commit('updateSections', s)
    router.go(-1)
  }
}
