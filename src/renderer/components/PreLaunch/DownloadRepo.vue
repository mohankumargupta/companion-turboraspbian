<template>
<div class="contentWrapper">
    <setup-wizard screen="github"></setup-wizard>
    <h1>Need to Download from github</h1>
    <button class="proceedMainInterface" @click="downloadAndUnzip">Proceed</button>
    <div class="downloadprogress">
        Done! Download Successful
    </div>
    <router-link class="next" :to="{name: 'launch-options'}" tag="button">Next</router-link>
</div>
</template>

<script>
import SetupWizard from './SetupWizard'
import DownloadRepoMount from './DownloadRepoMount.js'
export default {
  name: 'download-repo',
  components: { SetupWizard },
  methods: {
    downloadAndUnzip: () => {
      DownloadRepoMount.downloadAndUnzip()
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
</style>