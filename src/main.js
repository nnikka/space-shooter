import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import globalMixin from './mixins/global'
import Vuetify from 'vuetify'

import '@/components/_globals'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.mixin(globalMixin)

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
