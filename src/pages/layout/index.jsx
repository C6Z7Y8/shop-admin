import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Dropdown, Space } from "antd";
import { Outlet, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
const { Header, Sider, Content } = Layout;

const Layouts = ({ user, dispatch }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    // 清除所有的sessionStorage
    sessionStorage.clear();
    // 把user的全局state设置为""
    dispatch({
      type: "SET_TYPE",
      payload: "",
    });
    navigate("/login");
  };
  // 在layout 页面做权限校验，如果sessionStorage没有token，就跳到登录界面。编程时导航需要组件渲染后才能跳转。
  useEffect(function () {
    if (!sessionStorage.getItem("token")) {
      handleLogout();
    }
  }, []);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <span onClick={handleLogout}>退出</span>,
        },
      ]}
    />
  );

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}>后端管理系统</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/">首页</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <div style={{ marginRight: "15px" }}>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {user.username}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

// 设置props的默认值
Layouts.defaultProps = {
  user: "",
  dispatch: () => "",
};
// 设置props的数据类型
Layouts.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dispatch: PropTypes.func,
};

export default connect(
  (state) => ({ ...state.user }),
  (dispatch) => ({ dispatch })
)(Layouts);
