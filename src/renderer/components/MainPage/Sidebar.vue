<template>
<div class="contentarea">
    <div class="header">
    </div>
    <div class="sidebarContents">
        <div><i class="fas fa-th"></i>&nbsp;&nbsp;DASHBOARD</div>
        <div><i class="fas fa-home"></i> &nbsp;&nbsp;SUMMARY </div>
    </div>
</div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
fontawesome.library.add(faTh)
fontawesome.library.add(faHome)

export default {
  name: 'sidebar'
}
</script>

<style scoped>
.header {
    height: 40px;
    background-color: #2ecc71;
}

.sidebarContents {
    padding-top: 4vw;
    padding-left: 2vw;
}

.sidebarContents > div {
    padding-bottom: 3vw;
    font-size: 0.7rem;
    color: #fff;
    font-weight: 800;
}

</style>