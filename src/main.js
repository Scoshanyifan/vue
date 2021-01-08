import Vue from 'vue'
import App from './App'

// 导入store
import store from './store'
// 导入路由
import router from './router'
// 导入组件
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

// ElementUI
import ElementUI from 'element-ui';
import './assets/element-ui.scss';

Vue.config.productionTip = false

// 作为全局组件使用
Vue.component('todo-list', TodoList)
Vue.component('todo-item', TodoItem)

/* eslint-disable no-new */
new Vue({

  // 注册到Vue实例上，以便全局可以访问到$router
  router,
  // 全局store
  store,

  render: h => h(App)

  // TODO 等价于 .$mount('#app')
  // el: '#app',
}).$mount('#app')


Vue.use(ElementUI, {
  size: 'medium',
  // i18n: (key, value) => i18n.t(key, value)
});
