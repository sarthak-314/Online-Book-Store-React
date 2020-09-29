import React, { useState } from 'react'
import { Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout} from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const NavBar = props => {

  const { setNavItem } = props

    return (
        <>
      <div className="logo" />

        <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />} onClick={() => setNavItem(0)}>
          Browse
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => setNavItem(1)}>
          Read
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => setNavItem(2)}>
          Write
        </Menu.Item>
      </Menu>
      </Sider>
      </>
    )
}

export default NavBar