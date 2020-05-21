<template>
  <div id="app">
    <canban-main></canban-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CanbanMain from './components/CanbanMain.vue';

@Component({
  components: {
    CanbanMain,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
