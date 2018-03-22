<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             Python Modules
            </h4>
            <div class="cardContents">
                <div>
                    <button>Add Package</button>
                </div>
                <div>
                  <h5>Python 2 Modules (install via apt-get)</h5>
                  <div v-for="aptPackage in python2Apt">
                    <div>
                    <input v-model="aptPackage.value"/>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>Python 3 Modules (install via apt-get)</h5>
                  <div v-for="aptPackage in python3Apt">
                    <div>
                    <input v-model="aptPackage.value"/>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>Python 2 Modules (install via pip)</h5>
                  <div v-for="pipPackage in python2Pip">
                    <div>
                    <input v-model="pipPackage.value"/>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>Python 3 Modules (install via pip)</h5>
                  <div v-for="pipPackage in python3Pip">
                    <div>
                    <input v-model="pipPackage.value"/>
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
import PythonHelper from './PythonHelper.js'
import CommonHelper from './CommonHelper.js'

export default {
  name: 'installsoftware',
  data: () => {
    return {
      python2Apt: [],
      python3Apt: [],
      python2Pip: [],
      python3Pip: []
    }
  },
  methods: {
    approve: function () {
      CommonHelper.approve(this.$store, this.$router, 'python')
    }
  },
  mounted: function () {
    PythonHelper.mounted(this.$store.state.Counter.userconfig, this.python2Apt, this.python3Apt, this.python2Pip, this.python3Pip)
  }
}
</script>

<style scoped>
.card {
  height: 60vw;
}

</style>