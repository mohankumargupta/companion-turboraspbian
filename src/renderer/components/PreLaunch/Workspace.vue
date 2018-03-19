<template>
    <div>
    <div>
        <label for="workspacepath" class="workspacelabel">Workspace Location</label>
        <input type="text" name="workspacepath" class="textbox"/>
        <button class="browse">Browse...</button>
    </div>
    <router-link :to="{ name: 'download-repo' }" tag="button">Next</router-link>
    </div>
</template>
<script>
import WorkspaceMount from './WorkspaceMount.js'
export default {
  name: 'workspace',
  mounted: () => {
    WorkspaceMount.updated()
  }
}
</script>
<style scoped>
</style>