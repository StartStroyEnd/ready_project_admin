<template>
  <!-- 此处若再加上div的话将多一层容器，则无法宽高占满 -->
  <el-container>
    <!-- 头部 -->
    <el-header>
      <!-- 头部layout布局 -->
      <div>
        <!-- 左侧 -->
        <img src="../assets/logo.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <!-- 右侧 -->
      <el-button type="info" @click="logout">退出登录</el-button>
    </el-header>
    <el-container>
      <!-- 左侧路由导航菜单栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'" style="text-align:left">
        <div class="toggle-button" @click="togleCollapse">|||</div>
        <el-menu
          router
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="activePath"
        >
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="savePath('/' + subItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false,
      // 菜单列表图标
      iconObj: {
        "125": "iconfont icon-user",
        "103": "iconfont icon-tijikongjian",
        "101": "iconfont icon-shangpin",
        "102": "iconfont icon-danju",
        "145": "iconfont icon-baobiao",
      },
      // 当前被激活的导航地址
      activePath: "",
    };
  },
  created() {
    this.getMenuList();

    // 保存当前路由路径到实例data
    console.log(this.activePath);
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    // 保存当前路由路径
    savePath(path) {
      window.sessionStorage.setItem("activePath", path);
    },
    // 获取菜单列表数据
    getMenuList() {
      this.$store.dispatch("getMenuList");
    },
    // 退出登录
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 展开/收缩菜单栏
    togleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  computed: {
    ...mapGetters(["menuList"]),
  },
};
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373f41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    padding-left: 20px;
    display: flex;
    align-items: center;
    img {
      border-radius: 10px;
      height: 40px;
    }
    span {
      margin-left: 15px;
      color: #fff;
    }
  }
}

/* 导航菜单样式 */
.el-aside {
  background-color: #333744;

  .el-menu {
    border: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
}
// 展开收缩按钮
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  // 鼠标放上去变成小手
  cursor: pointer;
}
</style>
