<template>
  <div id="app">
    
    <RouteApp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import RouteApp from './components/RouteApp.vue';

export default {
  name: 'App',
  components: {
    RouteApp,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
