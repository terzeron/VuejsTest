<template>
  <div id="app">
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">
            <b-nav-text>홈</b-nav-text>
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
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
