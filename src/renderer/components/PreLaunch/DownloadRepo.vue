<template>
<div>
    <h1>Need to Download from github</h1>
    <button class="proceedMainInterface" @click="downloadAndUnzip">Proceed</button>
    <div class="downloadprogress">
        
    </div>
</div>
</template>

<script>
import DownloadRepoMount from './DownloadRepoMount.js'
export default {
  name: 'download-repo',
  methods: {
    downloadAndUnzip: () => {
      DownloadRepoMount.downloadAndUnzip()
    }
  }
}
</script>

<style scoped>

</style>