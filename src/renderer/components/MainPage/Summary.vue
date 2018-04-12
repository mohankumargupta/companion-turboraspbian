<template>
<div>
    <h5>SUMMARY</h5>
    <router-link :to="{name: 'dashboard'}"><span @click="activeLink('dashboard')">Back to Dashboard</span></router-link>
    <div class="sshWrapper">
      <div class="classContents">
      <p>The following will be done to the 
      Raspberry Pi:</p>


      <h4>INSTALL SOFTWARE</h4>
  
      <h5>From Apt Repository:</h5>

      <h5>From Python2 Modules:</h5>

      <h5>From Python3 Modules:</h5>

      <h5>From NodeRED modules</h5>


      <h4>UPGRADE:</h4>
      <ul>
        <li>NodeRED</li>
      </ul>      

      <h4>CONFIGURE</h4>
      <ul>
        <li>Docker:
          <ul>
            <li>Web</li>
          </ul>
        </li> 
      </ul>




      </div>
    </div>
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