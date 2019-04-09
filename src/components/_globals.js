import Vue from 'vue'
import Animate from './animate'
import Enemy from './enemy'
import Bullet from './bullet'
import DefaultLayout from './layouts/default'

const requireComponents = {
  'ss-animate': Animate,
  'ss-enemy': Enemy,
  'ss-Bullet': Bullet,
  'ss-default-layout': DefaultLayout
}

Object.keys(requireComponents).forEach(name => {
  Vue.component(name, requireComponents[name])
})
