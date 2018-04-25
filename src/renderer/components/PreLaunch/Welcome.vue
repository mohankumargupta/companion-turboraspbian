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
              <font-awesome-icon :icon="getIcon('online')"/>
               <span>Internet Access</span>
            </li>
            <li>
              <font-awesome-icon :icon="getIcon('shell')"/>
            <span v-if="shell" class="internet">Linux Shell</span>
            <span id="nobashshell" v-else class="internet">
              No Linux Shell <a href="#nobashshell" @click="downloadMsys2">Click here to download and install MSys2</a>
            </span>
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
        <el-button type="primary" @click="retry">Retry</el-button>
      </div>
    </div>
</div> 
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import SetupWizard from './SetupWizard'
import Shells from '@/shells.config'
export default {
  name: 'welcome',
  components: { SetupWizard, FontAwesomeIcon },
  computed: {
    prereqSatisfied: function () {
      return this.online && this.shell
    }
  },
  data: () => {
    return {
      online: false,
      shell: false
    }
  },
  mounted: function () {
    this.retry()
  },
  methods: {
    getIcon: function (item) {
      const status = (item === 'online') ? this.online : this.shell
      if (status) {
        return 'check-circle'
      } else {
        return 'times-circle'
      }
    },
    retry: function () {
      this.shell = this.hasShell()
      this.isConnected().then(reachable => { this.online = reachable }
      )
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