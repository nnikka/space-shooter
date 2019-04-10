<template>
  <div ref="bulletContainer" class="ss-player-lull">

  </div>
</template>

<script>
import Vue from 'vue'
import BulletAsset from '@/assets/Bullets/Bullet2.png'
import { mapGetters } from 'vuex'

export default {
  name: 'PlayerShoot',
  props: {
    scene: {
      required: true
    },
    shootingRate: {
      required: true,
      type: Number
    },
    clickShoot: {
      required: true,
      type: Boolean
    },
    bulletVelocity: {
      required: true
    },
    bullet: {
      required: true
    }
  },
  data() {
    return {
      lastShootTime: Date.now()
    }
  },
  computed: {
    ...mapGetters(['GAMESCENE_GET_POSITION'])
  },
  methods: {
    shoot() {
      let ComponentClass = Vue.extend(this.bullet)
      let leftPos = this.$refs.bulletContainer.getBoundingClientRect().left
      let topPos = this.$refs.bulletContainer.getBoundingClientRect().top
      console.log(this.$refs.bulletContainer.getBoundingClientRect())
      let instance = new ComponentClass({
        propsData: {
          bulletAsset: BulletAsset,
          velocity: this.bulletVelocity,
          leftPos: leftPos - this.GAMESCENE_GET_POSITION.left,
          topPos: topPos - this.GAMESCENE_GET_POSITION.top
        }
      })
      instance.$mount()
      this.scene.appendChild(instance.$el)
      // instance.$el.style.left = leftPos + 'px'
      // instance.$el.style.top = topPos + 'px'
      // instance.$el.getBoundingClientRect().left = this.$refs.bulletContainer.getBoundingClientRect().left
      // instance.$el.getBoundingClientRect().right = this.$refs.bulletContainer.getBoundingClientRect().right
    }
  },
  async mounted() {
    while (true) {
      if (this.clickShoot) {
        this.shoot()
      }
      await this.$sleep(this.shootingRate)
    }
  }
}
</script>

<style>
.ss-player-lull {
  position: absolute;
  left: 60px;
  top: 16px;
  width: 1px;
  height: 1px;
  background: red;
}
</style>
