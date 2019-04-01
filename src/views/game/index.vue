<template>
  <div ref="gameScene" class="ss-game-view">
    <game-world />
    <player :scene="gameScene" />
  </div>
</template>

<script>
import GameWorld from '@/components/gameWorld'
import Player from '@/components/player'

export default {
  name: 'game',
  components: {
    GameWorld,
    Player
  },
  data() {
    return {
      gameScene: null
    }
  },
  mounted() {
    this.gameScene = this.$refs.gameScene
  }
}
</script>

<style>
.ss-game-view {
  width: 800px;
  height: 400px;
  position: relative;
  display: inline-block;
}
</style>
