import React, { useState } from 'react'
import { Menu } from 'antd';
import { EditOutlined, FileSearchOutlined, ReadOutlined } from '@ant-design/icons';
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
      <div style={{marginBottom: '60px'}}></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<FileSearchOutlined />} onClick={() => setNavItem(0)}>
          Browse
        </Menu.Item>
        <Menu.Item key="2" icon={<ReadOutlined />} onClick={() => setNavItem(1)}>
          Read
        </Menu.Item>
        <Menu.Item key="3" icon={<EditOutlined />} onClick={() => setNavItem(2)}>
          Write
        </Menu.Item>
      </Menu>
      </Sider>
      </>
    )
}

export default NavBar