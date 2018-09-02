// 基于webpack的开发 是基于模块化的开发
// Node.js的模块化遵守CommonJs规范

// ES6模块化的语法 导入模块
// 相当于node.js中的 var Vue = require('vue');
import Vue from 'vue'
import App from './App.vue'

// 导入全局的样式
// 导入bootstrap的样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
