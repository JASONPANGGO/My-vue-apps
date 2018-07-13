<template>
  <div class="content">
      <img :src="img">
    <h2>{{name}}</h2>
    <p>
      {{msg}}
    </p>
    <u>
    <a href="https://jasonpanggo.github.io/">jasonpanggo.github.io</a>
    </u>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () { 
    return {
      msg: '前端的路，还有很长',
      name: 'JasonPang',
      img: require('../assets/avatar.jpg'),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  width: 18em;
  height: 20em;
  margin: 0 auto;
  margin-top: 5em;
}
img{
  width: 6em;
}

</style>
