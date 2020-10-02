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
      <el-button type="info">退出登录</el-button>
    </el-header>
    <el-container>
      <!-- 左侧路由导航菜单栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'" style="text-align:left">
        <div class="toggle-button" @click="togleCollapse">|||</div>
        <el-menu
          :collapse="isCollapse"
          :collapse-transition="false"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="111">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容区 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    // 展开分类菜单
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 关闭分类菜单
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 展开/收缩菜单栏
    togleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
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
