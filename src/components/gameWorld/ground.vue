<template>
  <div class="ss-game-world-ground">
    <img class="ss-sky-clouds" src="@/assets/Background/sky2.png" />
    <div class="ss-game-world-grass-container">
      <buildings />
      <img class="ss-bush" src="@/assets/Background/bush.png" />
      <img class="ss-grass" src="@/assets/Background/grass2.png" />
    </div>
  </div>
</template>

<script>
import Buildings from './buildings'
export default {
  name: 'GameWoldGround',
  components: {
    Buildings
  }
}
</script>

<style>
.ss-game-world-ground {
  width: 33%;
  margin-left: -4px;
  height: 100%;
  position: absolute;
  display: inline-block;
  background-image: url('~@/assets/Background/sky1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center top;
  background-attachment: fixed;
}
.ss-game-world-grass-container {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.ss-game-world-grass-container .ss-grass {
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: -2%;
  z-index: 100;
}
.ss-game-world-grass-container .ss-bush {
  width: 100%;
  height: auto;
  margin-bottom: -5.5%;
  position: relative;
  z-index: 100;
}
.ss-sky-clouds {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
