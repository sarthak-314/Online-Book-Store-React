import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { useSelector } from 'react-redux'
import SideBar from './Layout/SideBar'
import Chat from './Chat'


const { Content } = Layout
const { Header } = Layout

const ChatLayout = props => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }

  const name = useSelector(state => state.name)
  const pic = useSelector(state => state.pic)

  const myInfo = {name, pic}

  const friends = [{name: 'Pew'}, {name: 'Rick'}, {name: 'Thanos'}]
  const buyers = [{name: 'Buya1'}, {name: 'R1k'}, {name: 'T2os'}]

  const sarthak = [{
    name: 'Sarthak Bhatt', 
    avatar: 'https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-superJumbo-v3.jpg?quality=90&auto=webp'
  }]

  const [chattingWith, setChattingWith] = useState(sarthak[0])

  const [showList, setShowList] = useState(3)

  //get friends list

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
          <SideBar 
          onCollapse={onCollapse}
          collapsed={collapsed}
          friends={friends}
          buyers={buyers}
          setShowList={setShowList}
          setChattingWith={setChattingWith}
          sarthak={sarthak}
           />
          
          <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item> Anonymous User </Breadcrumb.Item>
          </Breadcrumb>
                <Chat
                showList={showList}
                chattingWith={chattingWith}
                myInfo={myInfo}
                friends={friends}
                buyers={buyers}
                sarthak={sarthak}
                setChattingWith={setChattingWith}
                />
          </Content>
        </Layout>
      </Layout>
  )
}

export default ChatLayout

