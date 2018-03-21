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





.sshWrapper {
    width:80vw;
    height: 50vw;
    padding-top: 3vw;
}

.card {
    width: 60vw;
    height: 30vw;
    margin: 0 auto;
    margin-top: 5vw;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 1px 2px 3px 0 rgba(0,0,0,.10);
}

.cardTitle {
    padding: 3vw;
    font-size: 18px;
    margin: 0;
    color: #5e6977;
    /*border-radius: 3px;*/
    border-bottom: 1px solid #ddd;
}

.cardContents {
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 3vw;
}

.inputWrapper {
    padding-bottom: 3vw;
    display: grid;
    grid-template-columns: 3fr 5fr 5fr;
}

.linkDashboard {
    padding-left: 3vw;
}

.save {
    padding-left: 3vw;
}

</style>
