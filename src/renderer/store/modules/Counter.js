const state = {
  main: 0,
  path: '',
  userconfig: {},
  sections: {},
  initialised: false
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  },
  updatePath (state, path) {
    state.path = path
  },
  updateUserConfig (state, config) {
    state.userconfig = config
  },
  updateSections (state, section) {
    state.sections = {...state.sections, ...section}
  },
  updateInstallSoftware (state, info) {
    console.log(info)
    let moo = []
    info.forEach((elem) => moo.push(elem.value))

    state.userconfig = {...state.userconfig,
      'RASPBIAN_APT_INSTALL': moo
    }
  },
  setInitialised (state) {
    state.initialised = true
  }

}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

const getters = {
  getPath: state => state.path
}

export default {
  state,
  getters,
  mutations,
  actions
}
