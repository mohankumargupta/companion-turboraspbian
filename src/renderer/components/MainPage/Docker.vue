<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             Docker
            </h4>
            <div class="cardContents">
            <div>
              <div>
                <h5>Docker Containers</h5>
                <div v-for="container in containers">
                    <div>
                    <label>{{ container.text }}</label>
                    <toggle-button :value="container.value"
                                   :labels="{
                                     checked: '  Enabled',
                                     unchecked: 
                                     '  Disabled'
                                   }"
                                   :width=80
                    ></toggle-button>                    
                    </div>
                </div>
              </div>
            </div>
            </div>
            <div class="save">
              <button>Change</button>
            </div>
    </div>
</div> 
</template>

<script>
import DockerHelper from './DockerHelper.js'
export default {
  name: 'docker',
  data: () => {
    return {
      enabled: true,
      containers: []
    }
  },
  mounted: function () {
    DockerHelper.mounted(this.$store.state.Counter.userconfig, this.containers)
  }
}
</script>

<style scoped>
.card {
    height: 80vw;
}

</style>