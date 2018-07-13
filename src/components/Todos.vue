<template>
  <div>
      <div class="input-group">
          <input type="text" class="form-control" v-model="task">
          <span class="input-group-btn">
              <button class="btn btn-primary" v-on:click="add">提交</button>
          </span>
      </div>
      <h5 v-if="tasks">任务列表</h5>
      <ul class="list-group" v-if="tasks">
        <li class="list-group-item" v-for="(item,index) in tasks">
            {{item}}
            <a v-on:click="tasks.splice(index,1)" class="text-primary">删除</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  data () {
    return {
      item: 'qwd',
      task:'',
      tasks:[],
    }
  },
  methods:{
      add: function(){
          this.tasks.push(this.task);
          this.task = null;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li {
    text-align: left;
}
a{
    float: right;
}
h5{
    text-align: left;
    margin-top: 10px;
}
a{
    cursor: pointer;
}
</style>
