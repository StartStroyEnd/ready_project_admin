import Vue from "vue";
import VueRouter from "vue-router";

//懒加载引入
const Home = () =>
  import(/* webpackChunkName: "Login_Home_Welcome" */ "../components/Home.vue");
const Login = () =>
  import(
    /* webpackChunkName: "Login_Home_Welcome" */ "../components/Login.vue"
  );

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "*",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default router;
