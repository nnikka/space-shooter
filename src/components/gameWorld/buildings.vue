<template>
  <div class="ss-game-buildings-container">
    <img class="ss-building-4" src="@/assets/Background/building4.png" />
    <img class="ss-building-3" src="@/assets/Background/building3.png" />
    <img class="ss-building-2" src="@/assets/Background/building2.png" />
    <img class="ss-building-1" src="@/assets/Background/building1.png" />
  </div>
</template>

<script>
export default {
  name: 'GameWoldBuildings'
}
</script>

<style>
.ss-game-buildings-container {
  position: relative;
  margin-bottom: -7%;
  z-index: 90;
}
.ss-game-buildings-container img {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
}
/* .ss-game-buildings-container .ss-building-2 {
  margin-bottom: 2.5%
} */
.ss-game-buildings-container .ss-building-3 {
  margin-bottom: 5%
}
.ss-game-buildings-container .ss-building-4 {
  margin-bottom: 7.5%
}
</style>
