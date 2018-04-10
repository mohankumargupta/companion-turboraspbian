<template>
<div class="sshWrapper">
    <router-link :to="{name: 'dashboard'}"><span @click="activeLink('dashboard')">Back to Dashboard</span></router-link>
    <div>
            <h4>
             RUN
            </h4>
            <div class="sshWrapper">
              <div>
               <ssh-common showApproveSettings="false"></ssh-common>
            <div class="sudo">
            <label>SUDO Password for Ubuntu</label>
            <input v-model="sudopassword" type="text" width="80"/>
            </div>               
            <div class="save">
              <button @click="run">Test</button>            
<router-link :to="{name: 'runbash'}" tag="button" @click="run"><span>Run</span></router-link>
            </div>
              </div>


            </div>


    </div>
</div> 
</template>

<script>
import SidebarHelper from './SidebarHelper'
import SSHCommon from './SSHCommon'
export default {
  name: 'runsummary',
  components: { 'ssh-common': SSHCommon },
  data: () => {
    return {
      hostname: '',
      ipaddress: '',
      username: '',
      password: '',
      sudopassword: ''
    }
  },
  methods: {
    activeLink: (link) => {
      SidebarHelper.activeLink(link)
    },
    run: function () {
      console.log('run')
      this.$store.commit('setSudoPassword', this.sudopassword)
    }
  }
}
</script>

<style scoped>
.sudo {
  padding-left: 3vw;
}
</style>