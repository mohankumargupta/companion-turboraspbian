<template>
<div class="sshWrapper">
    <router-link class="linkDashboard" :to="{name: 'dashboard'}">Back to Dashboard</router-link>
    <div class="card">
            <h4 class="cardTitle">
             Raspberry Pi IP and SSH Details
            </h4>
            <div class="cardContents">
            <div class="inputWrapper">
            <label for="ipaddress">Pi IP Address</label>
            <input name="ipaddress" title="Pi IP Address" type="text" placeholder="Pi IP Address"/>
            </div>
            <div class="inputWrapper">
            <label for="username">Username</label>
            <input name="username" title="username" type="text" placeholder="username"/>
            </div>
            <div class="inputWrapper">
            <label for="passwd">Password</label>
            <input name="passwd" title="password" type="text" placeholder="password"/>
            </div>
            </div>
            <div class="save">
              <button>Change</button>
            </div>
    </div>
</div> 
</template>

<script>
export default {
  name: 'ssh'
}
</script>

<style scoped>
.sshWrapper {
    width:80vw;
    height: 50vw;
    padding-top: 3vw;
}

.card {
    width: 60vw;
    height: 30vw;
    margin: 0 auto;
    margin-top: 5vw;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 1px 2px 3px 0 rgba(0,0,0,.10);
}

.cardTitle {
    padding: 3vw;
    font-size: 18px;
    margin: 0;
    color: #5e6977;
    /*border-radius: 3px;*/
    border-bottom: 1px solid #ddd;
}

.cardContents {
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 3vw;
}

.inputWrapper {
    padding-bottom: 3vw;
    display: grid;
    grid-template-columns: 3fr 5fr 5fr;
}

.linkDashboard {
    padding-left: 3vw;
}

.save {
    padding-left: 3vw;
}

</style>