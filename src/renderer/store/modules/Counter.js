const state = {
  main: 0,
  path: ''
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
