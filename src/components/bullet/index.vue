<template>
  <div ref="ssbullet" class="ss-bullet">
    <img :src="bulletAsset" />
  </div>
</template>

<script>
export default {
  name: 'Bullet',
  props: {
    bulletAsset: {
      required: true
    },
    direction: {
      type: String,
      default: 'right'
    },
    velocity: {
      type: Number,
      default: 20
    },
    leftPos: {
      required: true,
      type: Number
    },
    topPos: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      left: this.leftPos,
      top: this.topPos
    }
  },
  methods: {
    selfDestory() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  async mounted() {
    let bulletStyle = this.$refs.ssbullet
    bulletStyle.style.top = this.top + 'px'
    for (let i = 0; i < 100; i++) {
      bulletStyle.style.left = this.left + 'px'
      this.left += this.velocity
      await this.$sleep(30)
    }
    this.selfDestory()
  }
}
</script>

<style>
.ss-bullet {
  z-index: 150;
  position: absolute;
}
.ss-bullet img {
  position: relative;
  top: 60%;
  transform: translateY(-60%);
}
</style>
