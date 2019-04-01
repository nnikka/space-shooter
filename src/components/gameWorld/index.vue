<template>
  <div class="ss-game-world-container">
    <ground />
  </div>
</template>

<script>
import Ground from './ground'

export default {
  name: 'GameWold',
  components: {
    Ground
  }
}
</script>

<style>
  .ss-game-world-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("~@/assets/Background/sky1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center top;
    background-attachment: fixed;
    overflow: hidden;
  }
</style>
