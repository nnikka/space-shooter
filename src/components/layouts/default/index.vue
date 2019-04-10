<template>
  <v-app id="keep" class="ss-default-container">
    <slot />
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.ss-default-container {
  background-image: url("https://i.pinimg.com/originals/32/b8/77/32b877ed4aa7778cc7d43ebb7d95a6f1.png") !important;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center top;
  background-attachment: fixed;
}
</style>
