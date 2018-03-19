<template>
  <div id="wrapper">
    <div>
    <button @click="xterm()">Xterm</button>
    <div id="xterm"></div>
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  import xtermSetup from './renderer.js'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      xterm () {
        xtermSetup()
      }

    }
  }
</script>

<style scoped>
 @import '../../../node_modules/xterm/lib/xterm.css'
</style>
