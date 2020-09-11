<template>
  <div id="app">
    <Find />
    <List />
  </div>
</template>

<script>
import Find from './components/Find.vue';
import List from './components/List.vue';

export default {
  name: 'App',
  components: {
    Find,
    List
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  background-color: #EBEDEE;
  min-height: 100vh;
}
</style>
