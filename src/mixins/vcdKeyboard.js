import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['KEY_DOWNS_ADD_KEY', 'KEY_DOWNS_REMOVE_KEY'])
  },
  mounted() {
    document.addEventListener('keydown', event => {
      this.KEY_DOWNS_ADD_KEY(event.keyCode)
    })
    document.addEventListener('keyup', event => {
      this.KEY_DOWNS_REMOVE_KEY(event.keyCode)
    })
  }
}
