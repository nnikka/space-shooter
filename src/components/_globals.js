import Vue from 'vue'
import Animate from './animate'

const requireComponents = {
  'ss-animate': Animate
}

Object.keys(requireComponents).forEach(name => {
  Vue.component(name, requireComponents[name])
})
