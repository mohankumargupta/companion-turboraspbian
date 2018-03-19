<template>
<div>
    <h1>Need to Download from github</h1>
    <button class="proceedMainInterface">Proceed</button>
    <div class="downloadprogress">
        
    </div>
</div>
</template>

<script>
import DownloadRepoMount from './DownloadRepoMount.js'
export default {
  name: 'download-repo',
  mounted: () => {
    DownloadRepoMount.mounted()
  }
}
</script>

<style scoped>

</style>