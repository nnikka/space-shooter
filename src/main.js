import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import globalMixin from './mixins/global'


import '@/components/_globals'

Vue.config.productionTip = false

Vue.mixin(globalMixin)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
