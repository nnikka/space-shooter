<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl2>
        <player-stats />
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl8>
        <scene />
      </v-flex>
      <v-flex sx12 sm12 md12 lg12 xl2>
        <round-stats />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Scene from './scene'
import PlayerStats from './playerStats'
import RoundStats from './roundStats'

export default {
  name: 'game',
  components: {
    Scene,
    PlayerStats,
    RoundStats
  }
}
</script>

<style>
</style>
