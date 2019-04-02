import Vue from 'vue'
import Animate from './animate'
import Enemy from './enemy'

const requireComponents = {
  'ss-animate': Animate,
  'ss-enemy': Enemy
}

Object.keys(requireComponents).forEach(name => {
  Vue.component(name, requireComponents[name])
})
