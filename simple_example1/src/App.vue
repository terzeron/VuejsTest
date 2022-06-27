<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello message="안녕하세요?" my-message="kebab-case"></hello>
    <star></star>
    <br>
    <input v-model="parentMessage"><br>
    <dynamic v-bind:my-message="parentMessage"></dynamic><br>
    <dynamic :my-message="parentMessage"></dynamic>
    <br>
    <input v-focus>
    <br>
    <p>Total: {{total}} </p>
    <counter v-on:increment="incrementTotal" v-on:click.native="alert"></counter>
    <counter v-on:increment="incrementTotal"></counter>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Star from './components/Star'
  import Dynamic from './components/Dynamic'
  import Focus from './directives/Focus'
  import Counter from './components/Counter'
  
  export default {
    name: 'app',
    data() {
      return {
        parentMessage: 'We live in hell',
        total: 0
      }
    },
    methods: {
      incrementTotal: function() {
        this.total += 1
      },
      alert: function() {
        alert("native click");
      }
    },
    components: {
      Hello,
      Star,
      Dynamic,
      Counter
    },
    directives: {
      Focus
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
