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
                    <div class="choicesWrapper">
                    <div>{{ raspiInterface.text }}</div>
                    <div>
                    <toggle-button
                    :id="raspiInterface.text"
                    :sync="true"
                    :value="raspiInterface.value" :labels="{
                                     checked: '                Enabled',
                                     unchecked: 
                                     '     Disabled'
                                   }"
                    :width="80"
                    @change="buttonToggled"/> </div>                  
                    </div>
                </div>
              </div>
            </div>
            </div>
            <div class="save">
              <button @click="approve">Approve Settings</button>
            </div>
    </div>
</div> 
</template>

<script>
import RaspbianHelper from './RaspbianHelper.js'
import CommonHelper from './CommonHelper.js'

export default {
  name: 'installsoftware',
  data: () => {
    return {
      keyboardLayout: '',
      wifiSSID: '',
      wifiPassword: '',
      bluetooth: '',
      interfaces: []
    }
  },
  methods: {
    buttonToggled: function (info) {
      const key = info.srcEvent.path[1].id
      const value = info.value
      this.interfaces.forEach((elem, index) => {
        if (elem.text === key) {
          this.interfaces[index].value = value
        }
      })
    },
    approve: function () {
      CommonHelper.approve(this.$store, this.$router, 'raspbian')
      this.$store.commit('updateChoices', {
        list: this.interfaces,
        key: 'RASPICONFIG'
      })
      this.$store.commit('updateValue', {
        key: 'RASPBIAN_KEYBOARD_LAYOUT',
        value: this.keyboardLayout
      })
      this.$store.commit('updateValue', {
        key: 'RASPBIAN_ENABLE_BLUETOOTH',
        value: this.bluetooth
      })
    }
  },
  mounted: function () {
    RaspbianHelper.mounted(this.$store.state.Counter.userconfig, this.interfaces)
    this.keyboardLayout = this.$store.state.Counter.userconfig['RASPBIAN_KEYBOARD_LAYOUT']
    this.wifiSSID = this.$store.state.Counter.userconfig['RASPBIAN_WIFI_SSID']
    this.wifiPassword = this.$store.state.Counter.userconfig['RASPBIAN_WIFI_PASSWORD']
    this.bluetooth = this.$store.state.Counter.userconfig['RASPBIAN_ENABLE_BLUETOOTH']
  }
}
</script>

<style scoped>
.card {
    height: 80vw;
}

</style>