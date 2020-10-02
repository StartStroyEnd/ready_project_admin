import Vue from "vue";
import VueRouter from "vue-router";

//懒加载引入
const Home = () =>
  import(/* webpackChunkName: "Login_Home_Welcome" */ "../components/Home.vue");

const routes = [
  {
    path: "/home",
    component: Home,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default router;
