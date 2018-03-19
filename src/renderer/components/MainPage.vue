<template>
  <div class="wrapper">
    <div class="sidebar">
        <router-view name="sidebar"></router-view>
    </div>
    <div class="maincontentwrapper">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main-page'
  }
</script>

<style>

body {
    margin:0;
    padding: 0;
}

.wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100vw;
}

.sidebar {
    background-color: rgb(40,44,48);
}

.maincontentwrapper {

}


</style>
