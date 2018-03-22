<template>
<div>
    <h5>SUMMARY</h5>
    <router-link :to="{name: 'dashboard'}"><span @click="activeLink('dashboard')">Back to Dashboard</span></router-link>
</div> 
</template>

<script>
export default {
  name: 'summaryscreen',
  methods: {
    activeLink: (link) => {
      // const routeName = this.$route.name
      console.log(link)
      const activeLink = document.getElementsByClassName('router-link-active')
      activeLink[0].parentElement.style.backgroundColor = '#34495e'
      document.getElementById(link).style.backgroundColor = '#000'
    }
  }
}
</script>

<style scoped>

</style>