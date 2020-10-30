import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { PageHeader, Button, Descriptions } from "antd";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pages/home";
import Privacy from "../pages/privcey";
import Support from "../pages/supoort";
// import Nav from "./nav";

const Nav = (props) => {
  const [route, setRoue] = React.useState("1");
  const { SubMenu } = Menu;
  const { Header, Content, Sider, Footer } = Layout;

  return (
    <Router>
      <Layout className="layout">
        <Header style={{ backgroundColor: "#fff" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 style={{ color: "#111" }}>Utiny</h1>
            <Menu
              mode="horizontal"
              onChange={(e) => console.log(e.currentTarget.tabIndex)}
              defaultSelectedKeys={["1"]}
              style={{ height: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/feedback">Feedback</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/privacy">Privacy and policy</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content>
          <div className="site-layout-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/feedback" component={Support} />
              <Route path="/privacy" component={Privacy} />
              <Route path="*" component={Home} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © 2020 Utiny. All rights reserved
        </Footer>
      </Layout>
    </Router>
  );
};

export default Nav;
