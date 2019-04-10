import Vue from 'vue'
import Vuex from 'vuex'

import keyDowns from './modules/keyDowns'
import game from './modules/game'
import player from './modules/player'
import enemy from './modules/enemy'
import gameScene from './modules/gameScene'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    keyDowns,
    game,
    player,
    enemy,
    gameScene
  }
})
