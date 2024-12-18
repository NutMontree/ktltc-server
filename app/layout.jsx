"use client";
import Nav from "./(components)/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import {
  DesktopOutlined,
  // FileOutlined,
  // PieChartOutlined,
  // TeamOutlined,
  // UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem("Option 1 ", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "KTLTC SERVER",
//   description: "Creating a functional ktltc-server system.",
// };

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
            >
              {/* <div className="demo-logo-vertical" />
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
              /> */}
              <div className="demo-logo-vertical" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <div className="pt-4">
                  <div className="flex justify-center pt-4">
                    <Link className="hover:text-white " href="/">
                      <DesktopOutlined />
                    </Link>
                  </div>
                  <div className="flex justify-center pt-8">
                    <Link className="hover:text-white " href="/user">
                      User
                    </Link>
                  </div>
                  <div className="flex justify-center pt-8">
                    <Link className="hover:text-white " href="/post">
                      Post
                    </Link>
                  </div>
                </div>
              </Menu>
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: colorBgContainer,
                }}
              >
                <Nav />
              </Header>
              <Content
                style={{
                  margin: "0 16px",
                }}
              >
                <Breadcrumb
                  style={{
                    margin: "16px 0",
                  }}
                >
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item></Breadcrumb.Item>
                </Breadcrumb>
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <div>{children}</div>
                </div>
              </Content>
              <Footer
                style={{
                  textAlign: "center",
                }}
                className="text-xs"
              >
                <div className="flex justify-center">
                  <div>Copyright © 2023.</div>
                  <div> KTLTC / งานศูนย์ข้อมูลและสารสนเทศ</div>
                </div>
                <div>Designed By All M Min</div>
              </Footer>
            </Layout>
          </Layout>
        </div>
      </body>
    </html>
  );
}
