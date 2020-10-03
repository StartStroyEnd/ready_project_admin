import Vue from "vue";
import VueRouter from "vue-router";

//懒加载引入
// 首页
const Home = () =>
  import(/* webpackChunkName: "Login_Home_Welcome" */ "../components/Home.vue");
// 登录页面
const Login = () =>
  import(
    /* webpackChunkName: "Login_Home_Welcome" */ "../components/Login.vue"
  );
// 用户管理->用户列表
const Users = () => import("../components/users/Uers.vue");

// 权限管理-》角色列表
const Roles = () => import("../components/power/Roles.vue");
// 权限管理-》权限列表
const Rights = () => import("../components/power/Rights.vue");

// 商品管理-》商品列表
const Goods = () => import("../components/goods/Goods.vue");
// 商品管理-》分类参数
const Params = () => import("../components/goods/Params.vue");
// 商品管理-》商品分类
const Categories = () => import("../components/goods/Categories.vue");

// 订单管理
const Orders = () => import("../components/orders/Orders.vue");

// 数据统计
const Reports = () => import("../components/reports/Reports.vue");
const routes = [
  {
    path: "*",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    children: [
      // 用户列表
      {
        path: "/users",
        component: Users,
      },
      // 权限列表
      {
        path: "/rights",
        component: Rights,
      },
      // 角色列表
      {
        path: "/roles",
        component: Roles,
      },
      // 商品列表
      {
        path: "/goods",
        component: Goods,
      },
      // 分类参数
      {
        path: "/params",
        component: Params,
      },
      // 商品分类
      {
        path: "/categories",
        component: Categories,
      },
      // 订单列表
      {
        path: "/orders",
        component: Orders,
      },
      //数据报表
      {
        path: "/reports",
        component: Reports,
      },
    ],
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
