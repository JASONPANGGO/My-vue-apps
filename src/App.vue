<template>
  <div id="app">
    <headbar></headbar>
    <div class="container">
    <transition name="slide-fade">
    <router-view></router-view>
</transition>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import headbar from '@/components/Header'
import footbar from '@/components/Footer'

export default {
  name: 'App',
  components:{
    headbar,
    footbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 100%;
  padding: 0;
}
.container {
    height: 84vmax;
    width:100%;
    padding: 10px;
    overflow: scroll;
}

body{
    background-color: rgba(0,0,0,0.05);
}
.slide-fade-enter-active {
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .5s ease;
    -webkit-transition: all .5s ease; 
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
}

.slide-fade-enter{
    transform: translateX(20px);
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    opacity: 0;
}
.slide-fade-leave-active {
    opacity: 0;
}
</style>
