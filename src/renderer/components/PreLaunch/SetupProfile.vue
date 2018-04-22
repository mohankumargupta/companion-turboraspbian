<template>
    <div class="contentWrapper">
      <setup-wizard screen="profile"></setup-wizard>
    <div>
        <h1> Create Profile </h1>
        <div class="description">
          Profiles can help organise different setup scenarios for your Raspberry Pi (eg. gaming, CCTV, webserver) 
        </div>
        <div class="workspace">
            <div class="grid">
              <label for="profileName" class="workspacelabel">Profile Name</label>
              <input v-model="profileName" type="text" name="profileName" class="textbox"/>
            </div>
            <div class="grid">
              <label>Default Directory for Profile</label>
              <span>{{ profileDirectory }}              <button @click="openFolderDialog" class="browse">Change...</button></span>
            </div>
        </div>
    </div>
    <router-link :to="{ name: 'download-repo' }"><el-button type="primary"><span @click="nextStep">Next</span></el-button></router-link>
    </div>
</template>
<script>
import SetupWizard from './SetupWizard'
import SetupProfileHelper from './SetupProfileHelper.js'
export default {
  name: 'setup-profile',
  components: { SetupWizard },
  data: () => {
    return {
      profileDirectory: '',
      profileName: ''
    }
  },
  mounted: function () {
    const {app} = require('electron').remote
    this.profileDirectory = app.getPath('userData')
  },
  methods: {
    nextStep: function () {
      console.log(this.profileName)
      console.log(this.profileDirectory)
      const path = require('path')
      const profileLocation = path.resolve(this.profileDirectory, this.profileName)
      const fs = require('fs')
      if (!fs.existsSync(profileLocation)) {
        fs.mkdirSync(profileLocation)
      }
      const storage = require('electron-json-storage')
      storage.set('workspacePath', {path: profileLocation})
      this.$store.commit('updatePath', profileLocation)
    },
    updateWorkspacePath: () => {
      SetupProfileHelper.updateWorkspacePath()
    },
    openFolderDialog: function () {
      const newProfileDirectory = SetupProfileHelper.openFolderDialog(this.$store, this.profileDirectory)
      if (newProfileDirectory !== undefined) {
        this.profileDirectory = newProfileDirectory
      }
    }
  }
}
</script>
<style>
input {
  width: 200px;
}
.grid {
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding-bottom: 3vw;
}

label {
  font-weight: bold;
}

.description {
  padding-bottom: 6vw;
}
</style>