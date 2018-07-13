<template>
  <div>
     <div class="item first">
       <div class="row">
         <div class="col-4"></div>
         <div class="col-8">
           <div class="title">
            <h2>Lorem?</h2> 
            </div>
          </div>
       </div>
     </div>
     <div class="item"></div>
     <div class="item"></div>
     <div class="item"></div>
     <div class="item"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  width: 21em;
  height: 10em;
  margin: 0 auto;
  margin-top: 1em;
  border: 1px solid;
  border-radius: 5px;
}
.first{
  margin-top: 0;
}
</style>
