<template>
<div class="sshWrapper">
    <router-link :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
        <h4 class="cardTitle">
         Network Storage (SAMBA)
        </h4>
        <div class="cardContents">
          <div>
            <label for="samba">Storage Location</label>
            <input type="text" value="/storage" disabled />
          </div>
        <div class="save">
          <button @click="approve">Approve Settings</button>
        </div>
        </div>

    </div>
</div> 
</template>

<script>
import CommonHelper from './CommonHelper.js'
export default {
  name: 'network-storage',
  methods: {
    approve: function () {
      CommonHelper.approve(this.$store, this.$router, 'networkstorage')
      console.log(this.$store.state.Counter.sections)
    }
  }
}
</script>

<style scoped>
.save {
    padding-top: 2vw;
}
</style>