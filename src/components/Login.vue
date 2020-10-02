<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像框 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>

      <!-- 登录表单 -->
      <div>
        <!-- 帐号输入框 -->
        <!-- rules表单验证 -->
        <!-- model绑定数据对象 -->
        <!-- prop传入 Form 组件的 model 中的字段 -->
        <el-form
          class="login_form"
          :model="userInfo"
          :rules="loginFormRules"
          label-width="60px"
          ref="loginFormRef"
        >
          <el-form-item label="帐号:" prop="username">
            <el-input
              placeholder="请输入您的帐号！"
              prefix-icon="iconfont icon-user"
              v-model="userInfo.username"
            ></el-input>
          </el-form-item>

          <!-- 密码输入框 -->
          <el-form-item label="密码:" prop="password">
            <el-input
              v-model="userInfo.password"
              type="password"
              prefix-icon="iconfont icon-3702mima"
              placeholder="请输入您的密码！"
            ></el-input>
          </el-form-item>

          <!-- 登录和重置按钮 -->
          <el-form-item class="btns">
            <el-button class="info" type="primary" @click="login"
              >登录</el-button
            >
            <el-button class="info" type="info" @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        username: "admin",
        password: "123456",
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 重置按钮
    reset() {
      this.$refs.loginFormRef.resetFields();
    },
    // 登录按钮
    login() {
      this.$refs.loginFormRef.validate(async (validata) => {
        // 当前的表单校验对象
        // 如果这个形参为true说明当前rules自定义表单校验对象成功
        // console.log(validata);
        if (!validata) return false;
        const { data: res } = await this.$http.post("login", this.userInfo);
        if (res.meta.status !== 200)
          return this.$message.error("对不起，登录失败，请稍后重试！");
        this.$message.success("登录成功");

        // 保存token
        window.sessionStorage.setItem("token", res.data.token);
        // 通过编程式导航跳转到后台主页
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style scoped lang="less">
/* // lang="less" 支持less格式
// scoped vue的指令，只在当前组件生效 */
.login_container {
  background-color: #3e9795;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 360px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
}
.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  background-color: #fff;
  -webkit-transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_form {
  position: absolute;
  bottom: 60px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
  margin-left: -60px;
}
.info {
  font-size: 13px;
}
</style>
