<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             Raspbian Configuration
            </h4>
            <div class="cardContents">
            <div>
              <h5>Keyboard Layout</h5>
              <div>
                <input v-model="keyboardLayout" type="text"/>
              </div>
              <h5>Wifi</h5>
              <div>
                <div>
                    <label for="ssid">SSID</label>
                    <input name="ssid" v-model="wifiSSID" type="text"/>
                </div>
                <div>
                    <label for="password">Wifi Password</label>
                    <input name="password" v-model="wifiPassword" type="text" />
                </div>
              </div>
              <div>
                <h5>Bluetooth</h5>
                <div>
                    <toggle-button v-model=" bluetooth"
                                   :labels="{
                                     checked: '  Enabled',
                                     unchecked: 
                                     '  Disabled'
                                   }"
                                   :width=80
                    ></toggle-button>
                </div>
              </div>
              <div>
                <h5>Interfaces</h5>
                <div v-for="raspiInterface in interfaces">
                    <div>
                    <label>{{ raspiInterface.text }}</label>
                    <toggle-button :value="raspiInterface.value"
                                   :labels="{
                                     checked: '  Enabled',
                                     unchecked: 
                                     '  Disabled'
                                   }"
                                   :width=80
                    ></toggle-button>                    
                    </div>
                </div>
              </div>
            </div>
            </div>
            <div class="save">
              <button>Change</button>
            </div>
    </div>
</div> 
</template>

<script>
import RaspbianHelper from './RaspbianHelper.js'
export default {
  name: 'installsoftware',
  data: () => {
    return {
      keyboardLayout: '',
      wifiSSID: '',
      wifiPassword: '',
      bluetooth: false,
      interfaces: []
    }
  },
  mounted: function () {
    RaspbianHelper.mounted(this.$store.state.Counter.userconfig, this.interfaces)
  }
}
</script>

<style scoped>
.card {
    height: 80vw;
}

</style>