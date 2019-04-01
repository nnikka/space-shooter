<template>
  <div style="width: 800px; height: 400px; position: relative; display: inline-block;">
    <game-world />
    <player />
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
  }
}
</script>

<style>

</style>
