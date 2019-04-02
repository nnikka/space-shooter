<template>
  <div class="ss-player-lull"></div>
</template>

<script>
export default {
  name: 'PlayerShoot',
  mounted() {
    document.addEventListener('keydown', event => {
      if (event.keyCode == 32) {
        console.log('shoot')
      }
    })
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
