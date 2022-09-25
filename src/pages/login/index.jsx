// 引入的样式是局部样式，所有类名都作为styles对象的属性。
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./index.module.scss";
import logo from "../../assets/logo.png";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <main className={styles.login}>
      <section className={styles["login-con"]}>
        <div className={styles["login-con-l"] + "login-form"}>
          <h1>用户登录</h1>
          <div className={styles["login-con-form"]}>
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入用户名!",
                  },
                ]}
              >
                <Input placeholder="用户名" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入用户密码!",
                  },
                ]}
              >
                <Input type="password" placeholder="密码" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
            <p>忘记密码</p>
          </div>
        </div>
        <div className={styles["login-con-r"]}>
          <div>
            <img src={logo} alt="" />
            <h1>后端管理系统</h1>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
