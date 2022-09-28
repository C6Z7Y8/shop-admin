// 引入的样式是局部样式，所有类名都作为styles对象的属性。
import { Button, message, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../api/service";
import styles from "./index.module.scss";
import logo from "../../assets/logo.png";

function Login({ dispatch }) {
  const navigate = useNavigate();
  const onFinish = (values) => {
    // values 收集输入的内容对象
    login(values, (res) => {
      if (!res.token) {
        return message.error("用户名或者密码错误。");
      }
      sessionStorage.setItem("token", res.token);
      // 修改userReducers的state
      dispatch({
        type: "SET_USER",
        payload: res.data[0].datas[0],
      });
      navigate("/");
    });
  };
  return (
    <main className={styles.login}>
      <section className={styles["login-con"]}>
        <div className={styles["login-con-l"] + " login-form"}>
          <h1>用户登录</h1>
          <div className={styles["login-con-form"]}>
            <Form name="basic" onFinish={onFinish} autoComplete="off">
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
// 设置props的默认值
Login.defaultProps = {
  dispatch: () => "",
};
// 设置props的数据类型
Login.propTypes = {
  dispatch: PropTypes.func,
};

export default connect(
  () => {
    return {};
  },
  (dispatch) => ({ dispatch })
)(Login);
