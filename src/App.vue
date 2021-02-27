<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16.7px;
}
</style>
