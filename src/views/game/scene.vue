<template>
  <div ref="gameScene" class="ss-game-view" :style="{ height: height + 'px' }">
    <game-world />
    <player :scene="$refs.gameScene" />
  </div>
</template>

<script>
import GameWorld from '@/components/gameWorld'
import Player from '@/components/player'
import { mapActions } from 'vuex'

export default {
  name: 'gameScene',
  components: {
    GameWorld,
    Player
  },
  data() {
    return {
      windowHeight: 0,
      windowWidth: 0,
      height: 506,
      width: 900
    }
  },
  methods: {
    ...mapActions(['GAMESCENE_SET_POSITION']),
    recalculateSceneHeight() {
      this.width = this.$refs.gameScene.getBoundingClientRect().width
      this.height = this.$refs.gameScene.getBoundingClientRect().width / 16 * 9
    },
  },
  mounted() {
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    })
  },
  watch: {
    windowWidth(newVal, oldVal) {
      let payload = {
        top: this.$refs.gameScene.getBoundingClientRect().top,
        left: this.$refs.gameScene.getBoundingClientRect().left
      }
      this.GAMESCENE_SET_POSITION(payload)
      this.recalculateSceneHeight()
    }
  }
}
</script>

<style>
.ss-game-view {
  width: 100%;
  max-width: 900px;
  max-height: 506px;
  position: relative;
  display: inline-block;
  overflow: hidden;
}
</style>
