const state = {
  main: 0,
  path: '',
  userconfig: {},
  sections: {},
  hosts: '',
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
  updateList (state, info) {
    let moo = []
    const list = info['list']
    const key = info['key']
    list.forEach((elem) => moo.push(elem.value))
    const newUserConfig = {...state.userconfig}
    newUserConfig[key] = moo
    console.log(newUserConfig)
    state.userconfig = newUserConfig
  },
  updateValue (state, info) {
    const key = info['key']
    const value = info['value']
    const newUserConfig = {...state.userconfig}
    newUserConfig[key] = value
    state.userconfig = newUserConfig
  },
  updateChoices (state, info) {
    console.log(info)
    const key = info['key']
    const list = info['list']
    console.log(list)
    const newUserConfig = {...state.userconfig}
    list.forEach((elem) => {
      newUserConfig[key][elem.text] = elem.value
    })
    state.userconfig = newUserConfig
  },
  updateHosts (state, info) {
    state.hosts = info
  },
  saveHosts (state, info) {
    const ip = info.ip
    const username = info.username
    const key = Object.keys(state['hosts']['raspberrypis'])[0]
    state['hosts']['raspberrypis'][key] = ip + ' ' + 'ansible_user=' + username
    console.log(state['hosts'])
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
