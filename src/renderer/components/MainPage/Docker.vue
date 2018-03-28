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
                    <toggle-button 
                    :id="container.text"
                    :value="container.value"
                    :sync="true"
                    :labels="{
                      checked: '  Enabled',
                      unchecked: '  Disabled'
                    }"
                    :width=80
                    @change="buttonToggled"
                    ></toggle-button>                    
                    </div>
                </div>
              </div>
            </div>
            </div>
            <div class="save">
              <button @click="approve">Approve Settings</button>
            </div>
    </div>
</div> 
</template>

<script>
import DockerHelper from './DockerHelper.js'
import CommonHelper from './CommonHelper.js'

export default {
  name: 'docker',
  data: () => {
    return {
      enabled: true,
      containers: []
    }
  },
  methods: {
    buttonToggled: function (info) {
      console.log(info)
      const key = info.srcEvent.path[1].id
      const value = info.value
      this.containers.forEach((elem, index) => {
        if (elem.text === key) {
          this.containers[index].value = value
        }
      })
    },
    approve: function () {
      CommonHelper.approve(this.$store, this.$router, 'docker')
      this.$store.commit('updateChoices', {
        key: 'DOCKER',
        list: this.containers
      })
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