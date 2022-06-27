<template>
  <div class="hello">
    Hello, world!
    <div>{{ msg }}</div>
    <div>
        {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '"Hello, world" message from HelloWorld.vue',
      message: '안녕하세요? 이 메시지는 HelloWorld.vue에서 data()로 정의된 것입니다.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
