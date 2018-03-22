<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             Install software via apt-get
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
              <button @click="approve">Change</button>
            </div>
    </div>
</div> 
</template>

<script>
import ImportSoftwareHelper from './InstallSoftwareHelper.js'
export default {
  name: 'installsoftware',
  data: () => {
    return {
      packages: []
    }
  },
  methods: {
    approve: function () {
      this.$store.commit('updateSections', {
        installsoftware: true
      })
    }
  },
  mounted: function () {
    ImportSoftwareHelper.mounted(this.$store.state.Counter.userconfig, this.packages)
  }
}
</script>

<style scoped>


</style>