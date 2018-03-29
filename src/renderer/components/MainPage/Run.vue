<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
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
              <button @click="run">Test</button>            
              <button @click="run">Run</button>
            </div>
            </div>


    </div>
</div> 
</template>

<script>
export default {
  name: 'runsummary'
}
</script>

<style scoped>

</style>