import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import Axios from "axios";

// 导入全局样式
import "./assets/css/global.css";
// 引入路由对象
import router from "./router";
// 图标字体库
import "./assets/fonts/iconfont.css";

// 设置请求的基础路径
// 本地地址
Axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";
// 线上地址
// Axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/";

// 将axios挂载到vue原型中
// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
