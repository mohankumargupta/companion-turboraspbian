<template>
<div class="contentWrapper">
    <setup-wizard screen="github"></setup-wizard>
    <h1>Required to Download Important Files</h1>
    <div>
      <p>
        Need to download scripts from a <a href="#" @click="githubrepo">github repository</a>. OK?
        <div id="spinner" v-loading="loading"></div>
      </p>
    </div>
    <div v-if="completed">
    <p>Done! Download Successful</p>
    <router-link class="next" :to="{name: 'launch-options'}"><el-button type="primary">Next</el-button></router-link>
    </div>
    <div v-else>
    <el-button type="primary" class="proceedMainInterface" @click="downloadAndUnzip">Proceed</el-button>
    </div>
</div>
</template>

<script>
import SetupWizard from './SetupWizard'
import DownloadRepoMount from './DownloadRepoMount.js'
export default {
  name: 'download-repo',
  components: { SetupWizard },
  data: () => {
    return {
      loading: false,
      completed: false
    }
  },
  mounted: function () {
    this.$electron.ipcRenderer.on('downloadrepocomplete', () => {
      console.log('Downloading from github finished')
      this.loading = false
      this.completed = true
    })
  },
  methods: {
    downloadRepo: function () {
      const path = require('path')
      const fs = require('fs')
      const workspacePath = this.$store.state.Counter.path
      console.log(workspacePath)
      const filename = workspacePath + path.sep + 'master.zip'
      console.log(filename)
      this.$http.get('https://github.com/mohankumargupta/raspberrypi-ansible/archive/master.zip', {
        responseType: 'arraybuffer'
      }).then(response => fs.writeFileSync(filename, response.data))
    },
    downloadAndUnzip: function () {
      this.loading = DownloadRepoMount.downloadAndUnzip()
    },
    githubrepo: () => {
      const { shell } = require('electron').remote
      shell.openExternal('http://github.com/mohankumargupta/raspberrypi-ansible')
    }
  }
}
</script>

<style scoped>
 .downloadprogress {
   display:none;
 }

 .el-loading-mask > .el-loading-spinner {
   text-align: left !important;
 }

 #spinner {
 padding-top: 2vw;
 padding-bottom: 2vw;
 }
</style>