<template>
<div>
      {{msg}}
</div>
</template>

<script>
export default {
  name: 'Welcome',
  data () { 
    return {
      msg: 'Welcome To My First App'
    }
  }
}
var height1 = document.getElementById('app').style.height;
console.log(height1);
var container_height = document.getElementsByClassName('container');
container_height = height1;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
