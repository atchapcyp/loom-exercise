<template>
  <div id="app">
    <h1>Last 100 matches </h1>
    <match/>
  </div>
</template>

<script>
import match from './components/MatchHistory.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    match,
    HelloWorld
  }
}
</script>

<style lang="scss">
 @import '~bulma/bulma';
</style>
