// 基于webpack的开发 是基于模块化的开发
// Node.js的模块化遵守CommonJs规范

// ES6模块化的语法 导入模块
// 相当于node.js中的 var Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// 导入全局的样式
// 导入bootstrap的样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// 导入路由组件
import HeroList from './views/heroes/List.vue';
import WeaponList from './views/weapons/List.vue';
import EquipList from './views/equips/List.vue';
// Vue.use() 注册VueRouter插件
Vue.use(VueRouter);

// 创建路由对象
const router = new VueRouter({
  // 设置精确的激活类样式
  linkExactActiveClass: 'active',
  // 路由规则
  routes: [
    {path: '/heroes', component: HeroList},
    {path: '/weapons', component: WeaponList},
    {path: '/equips', component: EquipList}
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
