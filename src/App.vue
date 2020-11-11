<template>
  <div id="app">
    <v-app>
      <copy-paste
        tooltip
        value="Vue copy paste"
      />
    </v-app>
  </div>
</template>

<script>
import CopyPaste from './components/CopyPaste.vue'

export default {
  name: 'App',
  components: {
    CopyPaste
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
