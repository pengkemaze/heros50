<template>
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <!-- <li class="active">
            <a href="#">Overview <span class="sr-only">(current)</span></a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
           <a href="#">Analytics</a>
          </li>
          <li>
            <a href="#">Export</a>
          </li> -->
          <!-- router-link 的 tag 属性 标志将生成 li 标签
            exact-active-class="active" 绑定样式 使标签高亮
          -->
          <router-link tag="li" to="/heroes">
            <a>英雄管理</a>
          </router-link>
          <router-link tag="li" to="/weapons">
            <a>武器管理</a>
          </router-link>
          <router-link tag="li" to="/equips">
            <a>装备管理</a>
          </router-link>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    
</style>
