import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {  DesktopOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;


const SideBar = props => {

  const { collapsed, onCollapse, setChattingWith, setShowList } = props
  const { friends, buyers } = props
    
  const setChatFriend = (friend) => {
    setChattingWith(friend)
    setShowList(1)
  }

  const setChatBuyer = buyer => {
    setChattingWith(buyer)
    setShowList(2)
  }

  const setChatStaff = () => {
    setChattingWith(props.sarthak[0])
    setShowList(3)
  }
  
    return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div style={{marginBottom: '60px'}}/>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="Friends" onClick={() => setShowList(1)}>
              {friends.map((friend, idx) => (
                <Menu.Item onClick={() => {setChatFriend(friend)}}>{friend.name}</Menu.Item>
              ))}
            </SubMenu>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Buyers" onClick={() => setShowList(2)}>
                {buyers.map((buyer, idx) => (
                  <Menu.Item onClick={() => setChatBuyer(buyer)}>{buyer.name}</Menu.Item>
                ))}
            </SubMenu>
 
            <Menu.Item key="2" icon={<DesktopOutlined />} onClick={setChatStaff}>
                Support Staff
            </Menu.Item>
          </Menu>
    </Sider>
    )
}

export default SideBar