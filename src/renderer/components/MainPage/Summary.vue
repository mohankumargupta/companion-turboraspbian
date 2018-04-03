<template>
<div>
    <h5>SUMMARY</h5>
    <router-link :to="{name: 'dashboard'}"><span @click="activeLink('dashboard')">Back to Dashboard</span></router-link>
</div> 
</template>

<script>
import SidebarHelper from './SidebarHelper'
export default {
  name: 'summaryscreen',
  methods: {
    activeLink: (link) => {
      SidebarHelper.activeLink(link)
    }
  }
}
</script>

<style scoped>

</style>