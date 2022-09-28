// 请求和请求封装文件存放目录
const url = "";
const api = {
  login: `${url}dapi/vapi/adminLogin`, // admin登录
  getOrdersEchartData: `${url}dapi/vapi/getOrdersEchartData`, // 获取订单echart数据
  getAdminUserList: `${url}dapi/vapi/getAdminUserList`, // 返回后端管理员账号
  addCreateAdminUser: `${url}dapi/vapi/addCreateAdminUser`, // 添加管理账户
  updateAdminUser: `${url}dapi/vapi/updateAdminUser`, // 更新用户信息
  delAminUser: `${url}dapi/vapi/delAdminUser`, // 删除用户名
  usersList: `${url}dapi/vapi/usersList`, // 用户列表
};
export default api;
