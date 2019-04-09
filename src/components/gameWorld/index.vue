<template>
  <div class="ss-game-world-container">
    <div class="ss-game-rails">
      <ground ref="ssgr1" style="left: 0%" />
      <ground ref="ssgr2" style="left: 33%" />
      <ground ref="ssgr3" style="left: 66%" />
    </div>
  </div>
</template>

<script>
import Ground from './ground'

export default {
  name: 'GameWorld',
  components: {
    Ground
  },
  data() {
    return {
      ssgr1: {
        leftPos: 0.0,
      },
      ssgr2: {
        leftPos: 33.0
      },
      ssgr3: {
        leftPos: 66.0
      },
      velocity: 0.02,
      reRenderPos: -50.0,
      reRenderOffset: 99.0
    }
  },
  async mounted() {
    while (true) {
      this.ssgr1.leftPos = Math.round((this.ssgr1.leftPos - this.velocity) * 100) / 100
      this.ssgr2.leftPos = Math.round((this.ssgr2.leftPos - this.velocity) * 100) / 100
      this.ssgr3.leftPos = Math.round((this.ssgr3.leftPos - this.velocity) * 100) / 100
      this.$refs.ssgr1.$el.style.left = this.ssgr1.leftPos + '%'
      this.$refs.ssgr2.$el.style.left = this.ssgr2.leftPos + '%'
      this.$refs.ssgr3.$el.style.left = this.ssgr3.leftPos + '%'
      if (this.ssgr1.leftPos == this.reRenderPos) this.ssgr1.leftPos += this.reRenderOffset
      if (this.ssgr2.leftPos == this.reRenderPos) this.ssgr2.leftPos += this.reRenderOffset
      if (this.ssgr3.leftPos == this.reRenderPos) this.ssgr3.leftPos += this.reRenderOffset
      await this.$sleep()
    }
  }
}
</script>

<style>
.ss-game-world-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.ss-game-rails {
  width: 300%;
  height: 100%;
  position: relative;
}
</style>
