import CommonHelper from './CommonHelper.js'

export default {
  mounted: function () {
    const key = this.identities.key
    const list = this.$data[this.identities.listKey]
    CommonHelper.mountChoices(this.$store.state.Counter.userconfig, list, key)
  },
  methods: {
    buttonToggled: function (info) {
      console.log(info)
      const key = info.srcEvent.path[1].id
      const value = info.value
      const list = this.$data[this.identities.listKey]
      console.log(list)
      list.forEach((elem, index) => {
        if (elem.text === key) {
          list[index].value = value
        }
      })
    },
    approve: function () {
      const store = this.$store
      const router = this.$router
      const section = this.identities['key'].toLowerCase()
      let s = {}
      s[section] = true
      store.commit('updateSections', s)

      this.$store.commit('updateChoices', {
        key: this.identities.key,
        list: this.$data[this.identities.listKey]
      })

      const GO_BACK = -1
      router.go(GO_BACK)
    }
  }
}
