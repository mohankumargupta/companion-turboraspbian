<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             Raspberry Pi IP and SSH Details
            </h4>
            <div class="cardContents">
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
            </div>
            <div class="save">
              <button @click="approve">Approve Settings</button>
            </div>
    </div>
</div> 
</template>

<script>
export default {
  name: 'ssh',
  data: () => {
    return {
      ipaddress: '',
      username: 'pi',
      password: 'raspberry'
    }
  },
  methods: {
    approve: function () {
      this.$store.commit('updateSections', {
        ssh: true
      })
    }
  }
}
</script>

<style scoped>


</style>