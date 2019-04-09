<template>
  <div ref="ssbullet" class="ss-bullet">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: 'Bullet',
  props: {
    src: {
      required: true
    },
    direction: {
      type: String,
      default: 'right'
    },
    velocity: {
      type: Number,
      default: 20
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>
