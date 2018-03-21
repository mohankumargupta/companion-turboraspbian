<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             Install software via apt-get
            </h4>
            <div class="cardContents">
            
            </div>
            <div class="save">
              <button>Change</button>
            </div>
    </div>
</div> 
</template>

<script>
import ImportSoftwareHelper from './InstallSoftwareHelper.js'
export default {
  name: 'installsoftware',
  mounted: function () {
    ImportSoftwareHelper.mounted(this.$store)
  }
}
</script>

<style scoped>


</style>