<template>
  <div id="app">
    <HeaderNav></HeaderNav>
  </div>
</template>

<script>
// import HeaderNav from '@components/Nav/HeaderNav.vue'
export default {
  name: 'App',
  components: {
    HeaderNav:()=>import('@components/Nav'),
    // HeaderNav:()=>import('@components/Nav/HeaderNav.vue'),
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
  /* margin-top: 20px; */
}
</style>
