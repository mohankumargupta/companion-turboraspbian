<template>
<div class="contentarea">
    <div class="header">
    </div>
    <div class="sidebarContents">
        <div id="dashboard" class="sidebarEntry"><router-link :to="{name: 'dashboard'}"><i class="fas fa-th"></i><span @click="activeLink('dashboard')">&nbsp;&nbsp;DASHBOARD</span></router-link></div>
        <div id="summaryscreen" class="sidebarEntry"><router-link :to="{name: 'summaryscreen'}"><i class="fas fa-home"></i><span @click="activeLink('summaryscreen')">&nbsp;&nbsp;SUMMARY</span></router-link></div>
    </div>
</div>
</template>

<script>
export default {
  name: 'sidebar',
  mounted: function () {
    const activeLink = document.getElementsByClassName('router-link-active')
    activeLink[0].parentElement.style.backgroundColor = '#000'
    activeLink[0].parentElement.style.color = '#95a5a6'
    activeLink[0].style.color = '#fff'
  },
  methods: {
    activeLink: (link) => {
      const activeLink = document.getElementsByClassName('router-link-active')
      activeLink[0].parentElement.style.backgroundColor = '#34495e'
      activeLink[0].style.color = '#95a5a6'
      document.getElementById(link).style.backgroundColor = '#000'
    }
  }
}
</script>

<style scoped>
.header {
    height: 40px;
    background-color: #2ecc71;
}

.sidebarContents {
    padding-top: 4vw;
}

.sidebarContents > div {
    padding-bottom: 3vw;
    font-size: 0.7rem;
    font-weight: 800;
    padding-left: 2vw;
    padding-top: 2vw;
    background-color: #34495e;
}

.sidebarContents a {
    text-decoration: none;
    color: #95a5a6;
}

.router-link-active span, .router-link-active svg {
  color: #fff;
}

</style>