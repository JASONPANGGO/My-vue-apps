<template><router-link to='/'>
  <div class="header">
      
      {{msg}}
      
  </div></router-link>
</template>

<script>
export default {
  name: 'headbar',
  data () {
    return {
      msg: 'Vue小程序'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    background-color: #007bff;
    height: 8vmax;
    text-align: center;
    line-height: 8vmax;
    color: white;
}
</style>
