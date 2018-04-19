<template>
<div class="contentWrapper">
    <setup-wizard screen="welcome"></setup-wizard>
    <h1>Welcome to TurboPi!</h1>
    <div class="welcome">
     <p>This is a first-time wizard.</p>
     <p> Before we begin, let me check a few
        prerequisites.</p>
    </div>
    <div>
        <ul>
            <li>
            <i class="online fas fa-times-circle"></i>
            <span v-if="isonline" class="internet">Internet Access</span>
            <span v-else class="internet">No Internet Access</span>
            </li>
            <li>
            <i class="bash fas fa-times-circle"></i>
            <span v-if="bashshell" class="internet">Bash Shell</span>
            <span id="nobashshell" v-else class="internet">
              No Bash Shell <a href="#nobashshell" @click="downloadMsys2">Click here to download and install MSys2</a>
            </span>
            </li>      
        </ul>
    </div>

    <div v-if="prereqSatisfied" class="nextScreen">
        <div>
        <router-link :to="{name: 'setup-profile'}"><el-button type="primary">Next</el-button></router-link>
        </div>
    </div>
    <div v-else class="nextScreen">
      <div class="errorMessage">
     Oh oh! One of the prequisites has not been met. Try again.
      </div>
      <div>
        <el-button type="primary" @click="reload">Retry</el-button>
      </div>
    </div>
</div> 
</template>

<script>
import SetupWizard from './SetupWizard'
export default {
  name: 'welcome',
  components: { SetupWizard },
  computed: {
    prereqSatisfied: function () {
      return this.isonline && this.bashshell
    }
  },
  data: () => {
    return {
      isonline: false,
      bashshell: false,
      shellName: ''
    }
  },
  mounted: function () {
    setTimeout(() => { this.reload() }, 0)
  },
  methods: {
    reload: function () {
      const shellIcon = document.querySelectorAll('[data-fa-i2svg]')[1].dataset
      if (this.hasShell()) {
        this.bashshell = true
        shellIcon.icon = 'check-circle'
      } else {
        this.bashshell = false
        shellIcon.icon = 'times-circle'
      }
      this.isConnected().then(reachable => {
        this.isonline = reachable
        const onlineIcon = document.querySelectorAll('[data-fa-i2svg]')[0].dataset
        if (reachable) {
          onlineIcon.icon = 'check-circle'
        } else {
          onlineIcon.icon = 'times-circle'
        }
      })
    },
    downloadMsys2: () => {
      const { shell } = require('electron').remote
      shell.openExternal('https://www.msys2.org/')
    },
    isConnected: () => {
      const isReachable = require('is-reachable')
      return isReachable('example.com')
    },
    hasShell: function () {
      const process = require('process')
      if (process.platform === 'win32') {
        const fs = require('fs')
        const msys64Exists = fs.existsSync('C:\\msys64\\usr\\bin\\bash.exe')
        const msys32Exists = fs.existsSync('C:\\msys32\\usr\\bin\\bash.exe')
        const bashWinExists = fs.existsSync('C:\\Windows\\System32\\bash.exe')

        let shell

        if (msys64Exists) {
          shell = 'msys64'
        } else if (msys32Exists) {
          shell = 'msys32'
        } else if (bashWinExists) {
          shell = 'bashWin'
        }

        this.$store.commit('setShell', shell)
        return bashWinExists || msys32Exists || msys64Exists
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

ul {
  padding-left: 0;
}

.errorMessage {
  padding-bottom: 3vw;
  color: red;
}
</style>