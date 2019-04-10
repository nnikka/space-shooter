const state = {
  width: 900,
  height: 506,
  top: 0,
  left: 0
}

const getters = {
  GAMESCENE_GET_POSITION(state) {
    return {
      top: state.top,
      left: state.left
    }
  }
}

const actions = {
  GAMESCENE_SET_POSITION(context, payload) {
    context.commit('GAMESCENE_MUT_SET_POSITION', payload)
  }
}

const mutations = {
  GAMESCENE_MUT_SET_POSITION(state, payload) {
    state.top = payload.top
    state.left = payload.left
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
