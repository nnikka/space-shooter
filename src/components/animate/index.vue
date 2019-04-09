<template>
  <img class="ss-animate-img" :src="src" />
</template>

<script>
export default {
  name: 'animation',
  props: {
    assets: {
      required: true,
      type: Array
    },
    delay: {
      type: Number,
      default: 150
    }
  },
  data() {
    return {
      src: null,
      counter: 0
    }
  },
  async mounted() {
    this.src = this.assets[this.counter]
    while (true) {
      this.src = this.assets[this.counter]
      this.counter++
      if (this.counter == this.assets.length) this.counter = 0
      await this.$sleep(this.delay)
    }
  }
}
</script>

<style>
.ss-animate-img {
  width: 100%;
  height: 100%;
}
</style>
