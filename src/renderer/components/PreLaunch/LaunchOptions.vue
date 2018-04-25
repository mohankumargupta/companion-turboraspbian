<template>
<div class="contentWrapper">
    <setup-wizard screen="launch"></setup-wizard>
    <div>
    <font-awesome-icon class="customConfig" icon="cogs"/>
    <router-link :to="{name: 'dashboard'}">Main App</router-link>
    </div>
    <div class="routerLink">

    </div>
</div> 
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import SetupWizard from './SetupWizard'
export default {
  name: 'launch-options',
  components: { SetupWizard, FontAwesomeIcon }
}
</script>

<style scoped>
.customConfig {
  font-size: 4rem;
  padding: 0.1rem;
  border: 0.1rem solid black;
}

.routerLink {
    padding-top: 2rem;
}
</style>