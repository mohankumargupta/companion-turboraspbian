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
            <div class="save">
              <button @click="test">Test</button>            
<router-link :to="{name: 'runbash'}" tag="button"><span>Run</span></router-link>
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
      password: ''
    }
  },
  methods: {
    activeLink: (link) => {
      SidebarHelper.activeLink(link)
    },
    test: () => {

    },
    run: () => {

    }
  }
}
</script>

<style scoped>

</style>