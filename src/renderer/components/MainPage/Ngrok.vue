<template>
<div>
    <router-link :to="{name: 'dashboard'}">Back to Dashboard</router-link>

                <div v-for="notification in notifications">
                    <div>
                    <label>{{ notification.text }}</label>
                    <toggle-button 
                    :id="notification.text"
                    :value="notification.value"
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
      <div class="save">
            <button @click="approve">Approve Settings</button>
      </div>
</div> 
</template>

<script>
import CommonMixin from './CommonMixin'
export default {
  name: 'ngrok',
  mixins: [CommonMixin],
  data: () => {
    return {
      identities: {
        key: 'NGROK',
        listKey: 'notifications'
      },
      enable: false,
      notifications: []
    }
  }
}
</script>

<style scoped>

</style>