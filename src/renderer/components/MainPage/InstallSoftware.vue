<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             Install software via apt-get
            </h4>
            <div class="cardContents">
                <div>
                    <button @click="add">Add Package</button>
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
      otherpackages: []
    }
  },
  computed: {
    packages () {
      const boo = this.$store.state.Counter.userconfig['RASPBIAN_APT_INSTALL']
      let moo = []

      boo.forEach((elem) => {
        moo.push({value: elem})
      })

      this.otherpackages = moo

      return this.otherpackages
    }
  },
  methods: {
    approve: function () {
      CommonHelper.approve(this.$store, this.$router, 'installsoftware')
      this.$store.commit('updateInstallSoftware', {
        section: 'RASPBIAN_APT_INSTALL',
        packages: this.otherpackages
      })
    },
    trash: function (index) {
      this.packages.splice(index, 1)
    },
    add: function () {
      this.otherpackages.push({value: ''})
      console.log(this.otherpackages)
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>


</style>