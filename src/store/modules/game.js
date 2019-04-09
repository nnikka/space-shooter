const state = {
  level: 1,
  enemyCount: 5,
  levelDuration: 20,
}

const getters = {
  GAME_BOSS_ROUND(state) {
    return state.level != 1 && state.level % 3 == 0
  }
}

const actions = {
  GAME_INCREASE_LEVEL(context) {
    context.commit('GAME_MUT_INCREASE_LEVEL')
  },
}

const mutations = {
  GAME_MUT_INCREASE_LEVEL(state) {
    state.level += 1
    state.enemyCount += 2
    state.levelDuration += 3
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
