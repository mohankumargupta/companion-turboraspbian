<template>
<div>
    <div class="wizard">
        <a id="welcome"><span class="badge">1</span>Welcome</a>
        <a id="profile"><span class="badge">2</span>Create Profile</a>
        <a id="github"><span class="badge">3</span>Download from Github</a>
        <a id="launch"><span class="badge badge-inverse">4</span>Setup complete</a>
    </div>
</div> 
</template>
<script>
export default {
  name: 'setup-wizard',
  props: ['screen'],
  mounted: function () {
    const screen = this.$options.propsData.screen
    document.getElementById(screen).className = 'current'
  }
}
</script>

<style scoped>
.wizard {
  padding-bottom: 5vw; 
}

.wizard a {
  font-size: 1rem;    
}

.wizard a {padding: 12px 12px 10px 12px; margin-right:5px; background:#efefef; position:relative; display:inline-block; }
.wizard a:before {width:0px; height:0px; border-top: 20px inset transparent; border-bottom: 20px inset transparent; border-left: 20px solid #fff; position: absolute; content: ""; top: 0; left: 0;}
.wizard a:after {width:0px; height:0px; border-top: 20px inset transparent; border-bottom: 20px inset transparent; border-left: 20px solid #efefef; position: absolute; content: ""; top: 0; right: -20px; z-index:2;}
.wizard a:first-child:before {border:none;}
.wizard a:last-child:after {border:none;}

.wizard a:first-child {-moz-border-radius: 4px 0 0 4px; -webkit-border-radius: 4px 0 0 4px; border-radius:   4px 0 0 4px;}
.wizard a:last-child {-moz-border-radius: 0 4px 4px 0; -webkit-border-radius: 0 4px 4px 0; border-radius:   0 4px 4px 0;}

.wizard .badge {margin:0 5px 0 18px; position:relative; top:-1px;}
.wizard a:first-child .badge {margin-left:0;}

.wizard .current {background:#007ACC; color:#fff;}
.wizard .current:after {border-left-color:#007ACC;}

</style>