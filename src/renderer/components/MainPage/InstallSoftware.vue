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
                <div v-for="(aptPackage, index) in packages">
                    <div>
                    <input v-model="aptPackage.value"/><span @click="trash(index)"><i class="fas fa-trash-alt"></i></span>
                    </div>
                </div>
                </div>
            </div>
            <div class="save">
              <button @click="approve">Approve Settings</button>
            </div>
    </div>
</div> 
</template>

<script>
import CommonHelper from './CommonHelper.js'

export default {
  name: 'installsoftware',
  data: () => {
    return {
      packages: []
    }
  },
  methods: {
    approve: function () {
      CommonHelper.approve(this.$store, this.$router, 'installsoftware')
    },
    trash: function (index) {
      this.packages.splice(index, 1)
    }
  },
  mounted: function () {
    const config = this.$store.state.Counter.userconfig['RASPBIAN_APT_INSTALL']
    CommonHelper.mounted(config, this.packages)
  }
}
</script>

<style scoped>


</style>