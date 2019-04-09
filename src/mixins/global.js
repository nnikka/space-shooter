export default {
  methods: {
    $sleep(sleepDuration) {
      return new Promise(resolve => setTimeout(resolve, sleepDuration));
    }
  },
}
