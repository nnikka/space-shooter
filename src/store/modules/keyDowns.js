const state = {
  activeKeys: []
}

const getters = {
  KEY_DOWNS_GET_ACTIVE_W(state) {
    return state.activeKeys.includes(87)
  },
  KEY_DOWNS_GET_ACTIVE_A(state) {
    return state.activeKeys.includes(65)
  },
  KEY_DOWNS_GET_ACTIVE_S(state) {
    return state.activeKeys.includes(83)
  },
  KEY_DOWNS_GET_ACTIVE_D(state) {
    return state.activeKeys.includes(68)
  },
  KEY_DOWNS_GET_ACTIVE_ARROWUP(state) {
    return state.activeKeys.includes(38)
  },
  KEY_DOWNS_GET_ACTIVE_ARROWDOWN(state) {
    return state.activeKeys.includes(40)
  },
  KEY_DOWNS_GET_ACTIVE_ARROWLEFT(state) {
    return state.activeKeys.includes(37)
  },
  KEY_DOWNS_GET_ACTIVE_ARROWRIGHT(state) {
    return state.activeKeys.includes(39)
  },
  KEY_DOWNS_GET_ACTIVE_SPACE(state) {
    return state.activeKeys.includes(32)
  },
}

const actions = {
  KEY_DOWNS_ADD_KEY(context, payload) {
    context.commit('KEY_DOWNS_MUT_ADD_KEY', payload)
  },
  KEY_DOWNS_REMOVE_KEY(context, payload) {
    context.commit('KEY_DOWNS_MUT_REMOVE_KEY', payload)
  }
}

const mutations = {
  KEY_DOWNS_MUT_ADD_KEY(state, payload) {
    if (!state.activeKeys.includes(payload)) state.activeKeys.push(payload)
  },
  KEY_DOWNS_MUT_REMOVE_KEY(state, payload) {
    state.activeKeys = state.activeKeys.filter(item => item != payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
