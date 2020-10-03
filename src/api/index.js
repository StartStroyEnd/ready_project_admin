import ajax from "../ajax";

// 登录请求
export const reqLogin = ({ username, password }) =>
  ajax({
    url: "login",
    method: "POST",
    data: {
      username,
      password,
    },
  });
// 获取菜单列表数据
export const getMenuList = () =>
  ajax({
    url: "menus",
    method: "GET",
  });
