<template>
<div class="sshWrapper">
    <router-link :to="{name: 'dashboard'}"><span @click="activeLink('dashboard')">Back to Dashboard</span></router-link>
    <div>
            <h4>
             RUN
            </h4>
            <div>
            <div class="inputWrapper">
            <label for="hostname">Hostname</label>
            <input v-model="hostname" name="hostname" title="hostname" type="text" />
            </div>            
            <div class="inputWrapper">
            <label for="ipaddress">Pi IP Address</label>
            <input v-model="ipaddress" name="ipaddress" title="Pi IP Address" type="text" placeholder="Pi IP Address"/>
            </div>
            <div class="inputWrapper">
            <label for="username">Username</label>
            <input v-model="username" name="username" title="username" type="text" placeholder="username"/>
            </div>
            <div class="inputWrapper">
            <label for="passwd">Password</label>
            <input v-model="password" name="passwd" title="password" type="text" placeholder="password"/>
            </div>

            <div>
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
</template>

<script>
import SidebarHelper from './SidebarHelper'
export default {
  name: 'runsummary',
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

</style>