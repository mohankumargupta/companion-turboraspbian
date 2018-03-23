<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             Python Modules
            </h4>
            <div class="cardContents">
                <div>
                  <h5>Python 2 Modules (install via apt-get)</h5>
                  <div class="addmodule">
                    <button @click="add('python2Apt')">Add Module</button>
                  </div> 
                  <div v-for="(aptPackage, index) in python2Apt">
                    <div>
                    <input v-model="aptPackage.value"/>
                    <span @click="trash(index, 'python2Apt')"><i class="fas fa-trash-alt"></i></span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>Python 3 Modules (install via apt-get)</h5>
                  <div class="addmodule">
                    <button @click="add('python3Apt')">Add Module</button>
                  </div>                  
                  <div v-for="(aptPackage, index) in python3Apt">
                    <div>
                    <input v-model="aptPackage.value"/>
                    <span @click="trash(index, 'python3Apt')"><i class="fas fa-trash-alt"></i></span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>Python 2 Modules (install via pip)</h5>
                  <div class="addmodule">
                    <button @click="add('python2Pip')">Add Module</button>
                  </div> 
                  <div v-for="(pipPackage, index) in python2Pip">
                    <div>
                    <input v-model="pipPackage.value"/>
                    <span @click="trash(index, 'python2Pip')"><i class="fas fa-trash-alt"></i></span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>Python 3 Modules (install via pip)</h5>
                  <div class="addmodule">
                    <button @click="add('python3Pip')">Add Module</button>
                  </div> 
                  <div v-for="(pipPackage, index) in python3Pip">
                    <div>
                    <input v-model="pipPackage.value"/>
                    <span @click="trash(index, 'python3Pip')"><i class="fas fa-trash-alt"></i></span>
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
    },
    trash: function (index, key) {
      this[key].splice(index, 1)
    },
    add: function (key) {
      this[key].push('')
    }
  },
  mounted: function () {
    PythonHelper.mounted(this.$store.state.Counter.userconfig, this.python2Apt, this.python3Apt, this.python2Pip, this.python3Pip)
  }
}
</script>

<style scoped>
.card {
  height: 80vw;
}

.addmodule {
  padding-top: 1vw;
  padding-bottom: 1vw;
}

h5 {
  margin-top: 0;
}

.cardContents > div {
  padding-bottom: 2vw;
}
</style>