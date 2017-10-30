<template>
  <div>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h3 {
  border-bottom: solid black 2px;
  margin: 15px 100px;
}
</style>
