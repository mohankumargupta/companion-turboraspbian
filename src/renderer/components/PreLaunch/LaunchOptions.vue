<template>
<div class="contentWrapper">
    <setup-wizard screen="launch"></setup-wizard>
    <div>
    <router-link :to="{name: 'dashboard'}">Next</router-link>
    </div>
</div> 
</template>

<script>
import SetupWizard from './SetupWizard'
export default {
  name: 'launch-options',
  components: { SetupWizard }
}
</script>

<style scoped>

</style>