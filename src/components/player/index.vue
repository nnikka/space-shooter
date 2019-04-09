<template>
  <div ref="ssplayer" class="ss-player-container">
    <div class="ss-player">
      <div class="ss-player-engine">
        <ss-animate :assets="engineAssets" />
      </div>
      <div class="ss-player-body">
        <ss-animate :assets="playerAssets" />
      </div>
      <shoot :scene="scene" :shootingRate="PLAYER_GET_SHOOTINGRATE" :clickShoot="clickShoot" :bullet="bullet" :bulletVelocity="PLAYER_GET_BULLETVELOCITY" />
    </div>
  </div>
</template>

<script>
import asset1 from '@/assets/player/Robot_idle-1_01.png'
import asset2 from '@/assets/player/Robot_idle-1_02.png'
import asset3 from '@/assets/player/Robot_idle-1_03.png'
import asset4 from '@/assets/player/Robot_idle-1_04.png'
import asset5 from '@/assets/player/Robot_idle-1_05.png'
import asset6 from '@/assets/player/Robot_idle-1_06.png'
import engineAsset1 from '@/assets/player/Engine_fire-1_01.gif'
import engineAsset2 from '@/assets/player/Engine_fire-1_02.gif'
import engineAsset3 from '@/assets/player/Engine_fire-1_03.png'
import engineAsset4 from '@/assets/player/Engine_fire-1_04.gif'
import Shoot from './shoot'
import Bullet from '@/components/bullet'
import { mapGetters } from 'vuex'

export default {
  name: 'Player',
  props: {
    initialTop: {
      type: Number,
      default: 50
    },
    initialLeft: {
      type: Number,
      default: 50
    },
    scene: {
      required: true
    }
  },
  components: {
    Shoot
  },
  data() {
    return {
      playerAssets: [asset1, asset2, asset3, asset4, asset5, asset6],
      engineAssets: [engineAsset1, engineAsset2, engineAsset3, engineAsset4],
      top: this.initialTop,
      left: this.initialLeft,
      playerWidth: 55,
      playerHeight: 36,
      bullet: Bullet
    }
  },
  computed: {
    ...mapGetters([
      'KEY_DOWNS_GET_ACTIVE_W',
      'KEY_DOWNS_GET_ACTIVE_A',
      'KEY_DOWNS_GET_ACTIVE_S',
      'KEY_DOWNS_GET_ACTIVE_D',
      'KEY_DOWNS_GET_ACTIVE_ARROWUP',
      'KEY_DOWNS_GET_ACTIVE_ARROWDOWN',
      'KEY_DOWNS_GET_ACTIVE_ARROWLEFT',
      'KEY_DOWNS_GET_ACTIVE_ARROWRIGHT',
      'KEY_DOWNS_GET_ACTIVE_SPACE',
      'PLAYER_GET_VELOCITY',
      'PLAYER_GET_SHOOTINGRATE',
      'PLAYER_GET_BULLETVELOCITY'
    ]),
    topPos() {
      return this.top ? this.top : this.initialTop
    },
    leftPos() {
      return this.left ? this.left : this.initialLeft
    },
    clickShoot() {
      return this.KEY_DOWNS_GET_ACTIVE_SPACE
    }
  },
  methods: {
    goUp() {
      if (this.top - this.PLAYER_GET_VELOCITY - 5 > 0) {
        this.top -= this.PLAYER_GET_VELOCITY
        this.$refs.ssplayer.style.top = this.topPos + 'px'
      }
    },
    goDown() {
      if (
        this.top + this.PLAYER_GET_VELOCITY + this.playerHeight + 5 <
        this.scene.clientHeight
      ) {
        this.top += this.PLAYER_GET_VELOCITY
        this.$refs.ssplayer.style.top = this.topPos + 'px'
      }
    },
    goLeft() {
      if (this.left - this.PLAYER_GET_VELOCITY - 15 > 0) {
        this.left -= this.PLAYER_GET_VELOCITY
        this.$refs.ssplayer.style.left = this.leftPos + 'px'
      }
    },
    goRight() {
      if (
        this.left + this.PLAYER_GET_VELOCITY + this.playerWidth + 5 <
        this.scene.clientWidth
      ) {
        this.left += this.PLAYER_GET_VELOCITY
        this.$refs.ssplayer.style.left = this.leftPos + 'px'
      }
    }
  },
  async mounted() {
    this.$refs.ssplayer.style.left = this.left + 'px'
    this.$refs.ssplayer.style.top = this.top + 'px'
    while (true) {
      if (this.KEY_DOWNS_GET_ACTIVE_W || this.KEY_DOWNS_GET_ACTIVE_ARROWUP)
        this.goUp()
      if (this.KEY_DOWNS_GET_ACTIVE_S || this.KEY_DOWNS_GET_ACTIVE_ARROWDOWN)
        this.goDown()
      if (this.KEY_DOWNS_GET_ACTIVE_D || this.KEY_DOWNS_GET_ACTIVE_ARROWRIGHT)
        this.goRight()
      if (this.KEY_DOWNS_GET_ACTIVE_A || this.KEY_DOWNS_GET_ACTIVE_ARROWLEFT)
        this.goLeft()
      await this.$sleep(10)
    }
  }
}
</script>

<style>
.ss-player-container {
  position: absolute;
  height: 36px;
  width: 55px;
}
.ss-player {
  position: relative;
}
.ss-player-engine {
  top: 20px;
  left: -11px;
  width: 20px;
  position: absolute;
  z-index: 100;
}
.ss-player-body {
  position: absolute;
  z-index: 110;
}
</style>
