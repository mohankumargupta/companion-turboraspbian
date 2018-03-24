<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Bus from './bus.js'
export default {
  name: 'companion-turboraspbian',
  mounted: () => {
    console.log('App')
    console.log(Bus)
    Bus.$on('saveAs', () => {
      alert('saveAs')
    })
  }
}
</script>

<style>
  /* App-wide CSS */
.contentWrapper {
    padding: 5vw;
}
</style>
