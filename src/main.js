// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'   //  ./App.vue
import router from './router'   //  ./router/index.js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'   //  ./store/index.js
import Util from '@/helpers/util'   

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Util)  //使用我们自己创建的插件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },   // {App:App}
  template: '<App/>'
})

// 对于 components 对象中的每个属性来说，其属性名就是自定义元素的名字，其属性值就是这个组件的选项对象。
// 注意在 ES2015+ 中，在对象中放一个类似 ComponentA 的变量名其实是 ComponentA: ComponentA 的缩写，即这个变量名同时是：
// 用在模板中的自定义元素的名称
// 包含了这个组件选项的变量名
