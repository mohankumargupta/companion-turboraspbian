<template>
<section>
<main>
    <router-link class="cell" :to="{name: 'ssh'}" tag="div">
        <div class="titleHeader titleHeader1">
            Step 1
        </div>
        <div class="cellBody">
          SSH
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'installsoftware'}" tag="div">
        <div class="titleHeader titleHeader2">
            Step 2
        </div>
        <div class="cellBody">
          Install Software
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'raspbian'}" tag="div">
        <div class="titleHeader titleHeader3">
            Step 3
        </div>
        <div class="cellBody">
          Raspbian
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'python'}" tag="div">
        <div class="titleHeader titleHeader4">
            Step 4
        </div>
        <div class="cellBody">
          Python
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'default'}" tag="div">
        <div class="titleHeader titleHeader5">
            Step 5
        </div>
        <div class="cellBody">
          Node-Red
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'default'}" tag="div">
        <div class="titleHeader titleHeader6">
            Step 6
        </div>
        <div class="cellBody">
          Network Storage
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'default'}" tag="div">
        <div class="titleHeader titleHeader7">
            Step 7
        </div>
        <div class="cellBody">
          Docker
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'default'}" tag="div">
        <div class="titleHeader titleHeader8">
            Step 8
        </div>
        <div class="cellBody">
          Ngrok
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'default'}" tag="div">
        <div class="titleHeader titleHeader9">
            Step 9
        </div>
        <div class="cellBody">
          Miscellaneous
        </div>
    </router-link>
</main>
</section>
</template>

<script>
import DashboardHelper from './DashboardHelper.js'
export default {
  name: 'dashboard',
  mounted: function () {
    DashboardHelper.mounted(this.$store)
  }
}
</script>

<style scoped>
main {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 60px;
    text-align: center;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
}

.cell {
    margin-right:30px;
    margin-bottom: 30px;
    border: 1px solid rgb(232,232,232);
}

.cell :hover {
    background-color: rgb(241,241,241);
    text-decoration: underline;
    color:blue;
}

.titleHeader {
    color: #fff;
    padding: 20px;
}

.titleHeader1 {
    background-color: rgb(33,150,243);
}

.titleHeader2 {
    background-color: rgb(0,150,136);
}

.titleHeader3 {
    background-color: rgb(255,152,0);
}

.titleHeader4 {
    background-color: rgb(255,87,54);
}

.titleHeader5 {
    background-color: rgb(255,193,55);
}

.titleHeader6 {
    background-color: rgb(1,87,155);
}
.titleHeader7 {
    background-color: rgb(139,195,74);
}
.titleHeader8 {
    background-color: rgb(229,57,53);
}

.titleHeader9 {
    background-color: rgb(179,136,255);
}

.cellBody {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
}







</style>