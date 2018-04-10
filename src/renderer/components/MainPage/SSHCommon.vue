<template>
<div>
    <div>
            <h4 class="cardTitle">
             Raspberry Pi IP and SSH Details
            </h4>
            <div class="cardContents">
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
            <div v-if="approveSettings" class="save">
              <button @click="approve">Approve Settings</button>
            </div>
            </div>


    </div>
</div> 
</template>

<script>
import CommonHelper from './CommonHelper.js'

export default {
  name: 'sshcommon',
  props: ['showApproveSettings'],
  data: () => {
    return {
      hostname: '',
      ipaddress: '',
      username: 'pi',
      password: 'raspberry',
      approveSettings: true
    }
  },
  mounted: function () {
    if (this.$props.showApproveSettings === 'false') {
      this.approveSettings = false
    }
    // console.log(this.$store.state.Counter)
    const keys = Object.keys(this.$store.state.Counter['hosts']['raspberrypis'])
    const values = Object.values(this.$store.state.Counter['hosts']['raspberrypis'])
    const hostname = keys[0].split(' ')[0]
    const ipaddress = values[0].split(' ')[0]
    const username = values[0].split('=')[1]
    // const password = values[0].split('=')[2]
    this.hostname = hostname
    this.ipaddress = ipaddress
    this.username = username
  },
  methods: {
    approve: function () {
      CommonHelper.approve(this.$store, this.$router, 'ssh')
      this.$store.commit('saveHosts', {
        ip: this.ipaddress,
        host: this.host,
        username: this.username
      })
    }
  }
}
</script>
<style scoped>
</style>