<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             NodeRED Modules
            </h4>
            <div class="cardContents">
                <div>
                    <button>Add Package</button>
                </div>
                <div>
                <h5>Apt Package Name</h5>
                <div v-for="aptPackage in packages">
                    <div>
                    <input v-model="aptPackage.value"/>
                    </div>
                </div>
                </div>
            </div>
            <div class="save">
              <button>Change</button>
            </div>
    </div>
</div> 
</template>

<script>
import NodeRedHelper from './NodeRedHelper.js'
export default {
  name: 'nodered',
  data: () => {
    return {
      packages: []
    }
  },
  mounted: function () {
    NodeRedHelper.mounted(this.$store.state.Counter.userconfig, this.packages)
  }
}
</script>

<style scoped>


</style>