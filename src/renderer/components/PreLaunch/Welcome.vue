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
     Oh no! The prerequisites have not been satisfied.<br><br>Try again and hit Retry.
      </div>
      <div>
        <el-button type="primary" @click="reload">Retry</el-button>
      </div>
    </div>
</div> 
</template>

<script>
import SetupWizard from './SetupWizard'
import Shells from '@/shells.config'
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
      this.bashshell = this.hasShell()
      this.changeIcon(document.querySelectorAll('[data-fa-i2svg]')[1], this.bashshell)
      this.isConnected().then(reachable => {
        this.isonline = reachable
        this.changeIcon(document.querySelectorAll('[data-fa-i2svg]')[0], this.isonline)
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
    changeIcon: function (doc, tick) {
      const newState = tick ? 'check-circle' : 'times-circle'
      doc.dataset.icon = newState
    },
    hasShell: function () {
      return Shells.hasShell()
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