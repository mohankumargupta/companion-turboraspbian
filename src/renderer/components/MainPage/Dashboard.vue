<template>
<section>
<main>
    <router-link class="cell" :to="{name: 'ssh'}" tag="div">
        <div class="titleHeader titleHeader1">
            Step 1
        </div>
        <div class="cellBody">
          <i v-if="ssh" class="fas fa-thumbs-up"></i>      
          <i v-else class="fas fa-exclamation-triangle"></i>
          <div>SSH</div>
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'installsoftware'}" tag="div">
        <div class="titleHeader titleHeader2">
            Step 2
        </div>
        <div class="cellBody">
          <i v-if="installsoftware" class="fas fa-thumbs-up"></i>      
          <i v-else class="fas fa-exclamation-triangle"></i>
          <div>Install Software</div>
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'raspbian'}" tag="div">
        <div class="titleHeader titleHeader3">
            Step 3
        </div>
        <div class="cellBody">
         <i v-if="raspbian" class="fas fa-thumbs-up"></i>      
          <i v-else class="fas fa-exclamation-triangle"></i>
          <div>Raspbian</div>
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'python'}" tag="div">
        <div class="titleHeader titleHeader4">
            Step 4
        </div>
        <div class="cellBody">
         <i v-if="python" class="fas fa-thumbs-up"></i>      
          <i v-else class="fas fa-exclamation-triangle"></i>
          <div>Python</div>
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'nodered'}" tag="div">
        <div class="titleHeader titleHeader5">
            Step 5
        </div>
        <div class="cellBody">
         <i v-if="nodered" class="fas fa-thumbs-up"></i>      
          <i v-else class="fas fa-exclamation-triangle"></i>
          <div>NodeRed</div>
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'default'}" tag="div">
        <div class="titleHeader titleHeader6">
            Step 6
        </div>
        <div class="cellBody">
         <i v-if="samba" class="fas fa-thumbs-up"></i>      
          <i v-else class="fas fa-exclamation-triangle"></i>
          <div>Network Storage</div>
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'docker'}" tag="div">
        <div class="titleHeader titleHeader7">
            Step 7
        </div>
        <div class="cellBody">
         <i v-if="docker" class="fas fa-thumbs-up"></i>      
          <i v-else class="fas fa-exclamation-triangle"></i>
          <div>Docker</div>
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'default'}" tag="div">
        <div class="titleHeader titleHeader8">
            Step 8
        </div>
        <div class="cellBody">
         <i v-if="ngrok" class="fas fa-thumbs-up"></i>      
          <i v-else class="fas fa-exclamation-triangle"></i>
          <div>Ngrok</div>
        </div>
    </router-link>
    <router-link class="cell" :to="{name: 'default'}" tag="div">
        <div class="titleHeader titleHeader9">
            Step 9
        </div>
        <div class="cellBody">
         <i v-if="miscellaneous" class="fas fa-thumbs-up"></i>      
          <i v-else class="fas fa-exclamation-triangle"></i>
          <div>Miscellaneous</div>
        </div>
    </router-link>
</main>
</section>
</template>

<script>
import DashboardHelper from './DashboardHelper.js'
export default {
  name: 'dashboard',
  data: () => {
    return {
      ssh: false,
      installsoftware: false,
      raspbian: false,
      python: false,
      nodered: false,
      samba: false,
      docker: false,
      ngrok: false,
      miscellaneous: false
    }
  },
  mounted: function () {
    DashboardHelper.mounted(this.$store)
    const completedSections = Object.keys(this.$store.state.Counter.sections)
    completedSections.forEach((elem) => {
      this[elem] = true
    })
    console.log(this)
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

.cellBody svg {
    font-size: 48px;
}

.cellBody > div {
    padding-top:10px;
}

.fa-thumbs-up {
    color: green;
}

.fa-exclamation-triangle {
    color: red;
    font-size:48px;
}

</style>