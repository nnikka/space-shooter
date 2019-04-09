<template>
  <div id="app">
    <component :is="computedLayout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import VCDKeyboardMixin from '@/mixins/vcdKeyboard'

export default {
  name: 'App',
  mixins: [VCDKeyboardMixin],
  computed: {
    computedLayout() {
      return (
        'ss-' +
        (this.$route.meta.layout || this.defaultLayout || 'default') +
        '-layout'
      )
    }
  }
}
</script>
