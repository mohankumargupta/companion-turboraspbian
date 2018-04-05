<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'companion-turboraspbian'
}
</script>

<style>
@import '../../node_modules/notosans-fontface/css/notosans-fontface.css';

  /* App-wide CSS */
.contentWrapper {
    padding: 5vw;
}

.cardContents {
    padding-bottom: 2vw;
}

body {
    font-family: "Noto Sans"
}
</style>
