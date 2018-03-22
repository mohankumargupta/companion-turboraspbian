<template>
    <div class="contentWrapper">
    <div>
        <div class="workspace">
            <label for="workspacepath" class="workspacelabel">Workspace Location</label>
            <input type="text" name="workspacepath" class="textbox" @input="updateWorkspacePath"/>
            <button @click="openFolderDialog" class="browse">Browse...</button>
        </div>
    </div>
    <router-link :to="{ name: 'download-repo' }" tag="button">Next</router-link>
    </div>
</template>
<script>
import WorkspaceMount from './WorkspaceMount.js'
export default {
  name: 'workspace',
  methods: {
    updateWorkspacePath: () => {
      WorkspaceMount.updateWorkspacePath()
    },
    openFolderDialog: function () {
      WorkspaceMount.openFolderDialog(this.$store)
    }
  }
}
</script>
<style scoped>
.workspace {
    display: grid;
    grid-template-columns: 1fr 3fr auto;
}
</style>