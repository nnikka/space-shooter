import Vue from 'vue'
import Animate from './animate'
import Enemy from './enemy'
import Bullet from './bullet'

const requireComponents = {
  'ss-animate': Animate,
  'ss-enemy': Enemy,
  'ss-Bullet': Bullet
}

Object.keys(requireComponents).forEach(name => {
  Vue.component(name, requireComponents[name])
})
