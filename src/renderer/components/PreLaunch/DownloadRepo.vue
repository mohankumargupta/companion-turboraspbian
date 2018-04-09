<template>
<div class="contentWrapper">
    <setup-wizard screen="github"></setup-wizard>
    <h1>Required to Download Important Files</h1>
    <div>
      <p>
        Need to download scripts from a github repository (https://github.com/mohankumargupta/raspberrypi-ansible). OK?
        <div id="spinner" v-loading="loading"></div>
      </p>
    </div>
    <el-button type="primary" class="proceedMainInterface" @click="downloadAndUnzip">Proceed</el-button>
    <div class="downloadprogress">
        Done! Download Successful
    </div>
    <router-link class="next" :to="{name: 'launch-options'}"><el-button type="primary">Next</el-button></router-link>
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
      loading: false
    }
  },
  mounted: function () {
    this.$electron.ipcRenderer.on('downloadrepocomplete', () => {
      console.log('Downloading from github finished')
      this.loading = false
    })
  },
  methods: {
    downloadAndUnzip: function () {
      this.loading = DownloadRepoMount.downloadAndUnzip()
    }
  }
}
</script>

<style scoped>
 .next {
   display:none;
 }

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