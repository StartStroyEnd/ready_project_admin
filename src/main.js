import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

// 导入全局样式
import "./assets/css/global.css";

// 引入路由对象
import router from "./router";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
