<template>
    <div class="contentWrapper">
      <setup-wizard screen="profile"></setup-wizard>
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
import SetupWizard from './SetupWizard'
import WorkspaceMount from './WorkspaceMount.js'
export default {
  name: 'workspace',
  components: { SetupWizard },
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