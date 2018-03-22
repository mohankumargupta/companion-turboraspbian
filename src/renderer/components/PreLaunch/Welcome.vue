<template>
<div class="contentWrapper">
    WELCOME
    <div>
        <router-link :to="{name: 'first-run'}">Next</router-link>
    </div>
</div> 
</template>

<script>
export default {
  name: 'welcome'
}
</script>

<style scoped>

</style>