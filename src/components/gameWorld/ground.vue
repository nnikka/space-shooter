<template>
  <div class="ss-game-world-ground-container">
    <img class="ss-bush" src="@/assets/Background/bush.png" />
    <img class="ss-grass" src="@/assets/Background/grass2.png" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.ss-game-world-ground-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.ss-game-world-ground-container .ss-grass {
  width: 100%;
  height: auto;
}
.ss-game-world-ground-container .ss-bush {
  width: 100%;
  height: auto;
  margin-bottom: -4.5%;
}
</style>
