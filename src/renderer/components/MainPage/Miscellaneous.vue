<template>
<div>
    <router-link :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="sshWrapper">
      <div class="classContents">
        <h4>Miscellaneous</h4>
                <div v-for="software in softwareList">
                    <div>
                    <label>{{ software.text }}</label>
                    <toggle-button 
                    :id="software.text"
                    :value="software.value"
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
      </div>
      <div class="save">
            <button @click="approve">Approve Settings</button>
      </div>
    </div>
</div> 
</template>

<script>
import CommonHelper from './CommonHelper.js'
export default {
  name: 'miscellaneous',
  data: () => {
    return {
      softwareList: []
    }
  },
  mounted: function () {
    CommonHelper.mountChoices(this.$store.state.Counter.userconfig, this.softwareList, 'MISCELLANEOUS')
  },
  methods: {
    buttonToggled: function (info) {
      console.log(info)
      const key = info.srcEvent.path[1].id
      const value = info.value
      this.softwareList.forEach((elem, index) => {
        if (elem.text === key) {
          this.softwareList[index].value = value
        }
      })
    },
    approve: function () {
      CommonHelper.approve(this.$store, this.$router, 'miscellaneous')
      this.$store.commit('updateChoices', {
        key: 'MISCELLANEOUS',
        list: this.softwareList
      })
    }
  }
}
</script>

<style scoped>
.classContents {
  padding-left: 3vw;
}
</style>