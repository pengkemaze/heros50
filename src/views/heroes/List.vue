<template>
<!--模板中不能写零散的标签 外层必须包一个div标签-->
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <!--<a class="btn btn-success" href="add.html">Add</a>-->
    <router-link class="btn btn-success" to="/heroes/add">Add</router-link>
    <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in list" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <a href="edit.html">edit</a>
                  &nbsp;&nbsp;
                  <a href="javascript:;" @click.prevent="handleDelete(item.id)">delete</a>
                </td>
              </tr>
              <tr>
                <td v-if="list.length === 0">暂无数据</td>
              </tr>
            </tbody>
          </table>
    </div>
  </div>

</template>

<script>
// 导入 axios
import axios from 'axios';
export default {
  // 组件中的data必须是一个方法
  data() {
    return {
      // 英雄列表
      list: []
    };
  },
  mounted() {
    // 调用 loadData()
    this.loadData();
  },
  methods: {
    // 加载数据
  loadData() {
    axios
         .get('http://localhost:3000/heroes')
         .then((response) => {
           if (response.status === 200) {
             this.list = response.data;
           } 
         })
         .catch((err) => {

         });
    },
    handleDelete(id) {
      // 删除提示
      if (!confirm('确定删除该英雄吗？')) {
        return;
      }
      // 发送异步请求 删除数据
      axios.delete(`http://localhost:3000/heroes/${id}`)
           .then((response) => {
             if (response.status === 200) {
              //  删除成功 重新加载页面数据
               this.loadData();
             };
             
           })
           .catch((err) => {

           });
    }
  }

};
</script>

<style>
    
</style>