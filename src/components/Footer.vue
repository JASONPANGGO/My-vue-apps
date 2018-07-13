<template>
  <div class="footer">
      <ul>
        <router-link to="/todos">
          <li>    
            清单
          </li>
        </router-link>
        <router-link to="/find">
          <li>
            发现
          </li>
        </router-link>
        <router-link to="/more">
          <li>
            更多
          </li>
        </router-link>
        <router-link to="/about">
          <li>
            关于作者
          </li>
        </router-link>

      </ul>
  </div>
</template>

<script>
export default {
  name: 'footbar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    height: 8vmax;
    margin: 0;
    padding: 0;
    background-color: #007bff;
    bottom: 0;
    position: absolute;
    width: 100%;
}
 ul {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
  }
ul li {
    width: 25%;
    height: 8vmax;
    line-height: 8vmax;
    float: left;
    text-align: center;
  }
li {
  color: white;
  transition: all .2s;
}

li:active{
  background-color: dodgerblue;
}
</style>