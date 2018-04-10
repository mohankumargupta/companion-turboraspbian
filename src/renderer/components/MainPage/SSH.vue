<template>
<div>
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="sshWrapper">
      <ssh-common></ssh-common>
    </div>
</div> 
</template>

<script>
import SSHCommon from './SSHCommon'

export default {
  name: 'ssh',
  components: { 'ssh-common': SSHCommon }
}
</script>
<style scoped>
</style>