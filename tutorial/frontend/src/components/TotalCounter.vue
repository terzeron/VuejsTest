<template>
  <div id="counter-event-example">
    <p>클릭 수 합계: {{ total }}</p>
    버튼1: <button-counter v-on:increment="incrementTotal"></button-counter>
    버튼2: <button-counter v-on:increment="incrementTotal"></button-counter>
  </div>
</template>

<script>
import ButtonCounter from './ButtonCounter.vue';

export default {
  name: "TotalCounter",
  components: {
    ButtonCounter
  },
  data: function () {
    return {
      total: 0
    }
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
}
</script>

<style scoped>
#counter-event-example { border: black 1px solid; }
</style>
