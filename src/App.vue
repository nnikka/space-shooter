<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import VCDKeyboardMixin from '@/mixins/vcdKeyboard'

export default {
  name: 'App',
  mixins: [VCDKeyboardMixin]
}
</script>
