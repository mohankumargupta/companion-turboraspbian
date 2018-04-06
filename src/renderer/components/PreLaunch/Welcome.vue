<template>
<div class="contentWrapper">
    <setup-wizard screen="welcome"></setup-wizard>
    <h1>Welcome to TurboPi!</h1>
    <div class="welcome">
     <p>This is a first-time wizard.</p>
     <p> Before we begin, let me check a few
        pre-requisites.</p>
    </div>
    <div>
        <ul>
            <li v-if="isonline" class="internet">Internet Access</li>
            <li v-else class="internet">No Internet Access</li>
            <li v-if="bashshell" class="internet">Bash Shell</li>
            <li v-else class="internet">
              No Bash Shell
            </li>      
        </ul>
    </div>
    <div class="nextScreen">
        <div>
        <router-link :to="{name: 'first-run'}">Next</router-link>
        </div>
    </div>
</div> 
</template>

<script>
import SetupWizard from './SetupWizard'
export default {
  name: 'welcome',
  components: { SetupWizard },
  data: () => {
    return {
      isonline: false,
      bashshell: false
    }
  },
  created: function () {
    this.isConnected().then(reachable => {
      this.isonline = reachable
    })
    if (this.hasShell()) {
      this.bashshell = true
    }
  },
  methods: {
    isConnected: () => {
      const isReachable = require('is-reachable')
      return isReachable('example.com')
    },
    hasShell: () => {
      const process = require('process')
      if (process.platform === 'win32') {
        const fs = require('fs')
        const bashExists = fs.existsSync('C:\\Windows\\System32\\bash.exe')
        return bashExists
      }
      return false
    }
  }
}
</script>

<style scoped>


.welcome p{
    font-family: "Noto Sans"
}


.nextScreen {
    padding-top: 5vw;
}

li {
    list-style: none;
    padding-bottm: 3vw;
    padding-top: 3vw;
    font-weight:bold;
}

.fa-check-circle {
    color: green;
    background-color: white;
    font-size: 2rem;
}

.fa-times-circle {
    color: red;
    background-color: white;
    font-size: 2rem;
}

</style>