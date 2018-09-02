// 路由 模块
import VueRouter from 'vue-router';
import Vue from 'vue';
// 导入路由组件
import HeroList from '../views/heroes/List.vue';
import WeaponList from '../views/weapons/List.vue';
import EquipList from '../views/equips/List.vue';
// 添加英雄路由
import HeroAdd from '../views/heroes/Add.vue';
// Vue.use() 注册VueRouter插件
Vue.use(VueRouter);

// 创建路由对象
const router = new VueRouter({
  // 设置精确的激活类样式
  // linkExactActiveClass: 'active',
  // url中的路由地址 包含a标签中的路由地址 高亮显示
  linkActiveClass: 'active',
  // 路由规则
  routes: [
    // 当路径为 / 时 redirect设置 跳转到 heroes页
    {path: '/', redirect: '/heroes'},
    {path: '/heroes', component: HeroList},
    {path: '/weapons', component: WeaponList},
    {path: '/equips', component: EquipList},
    {path: '/heroes/add', component: HeroAdd}
  ]
});

// 导出 路由对象
export default router;
