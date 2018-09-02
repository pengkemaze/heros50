<template>
  <div id="myapp">
  <!-- header -->
  <app-header></app-header>

  <div class="container-fluid">
    <div class="row">
      <!-- sidebar -->
      <app-sidebar></app-sidebar>

      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <!-- 主内容区域 -->
         
        <!-- 路由占位 -->
        <router-view></router-view>

      </div>
    </div>
  </div>
  </div>
</template>

<script>

// 导入 头部 AppHeader组件
import AppHeader from './components/AppHeader';
// 导入 侧边栏 AppSidebar组件
import AppSidebar from './components/AppSidebar';
// 导入 英雄列表 List组件
import List from './views/heroes/List';
// ES6中的模块化的语法  导出一个对象
export default {
  name: 'app',
  components: {
    AppHeader,
    AppSidebar,
    List
  },
  data () {
    return {
      
    };
  }
}
</script>

<style>

</style>
