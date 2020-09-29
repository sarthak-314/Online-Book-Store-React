import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import { List, Avatar, Space } from 'antd';
import { Layout} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const BlogPage = props => {

  const [listData, setListData] = useState([])

  useEffect(() => {
  
    getListData()
  
  }, [])
  const getListData = () => {

    for (let i = 0; i < 23; i++) {
      listData.push({
        href: 'https://ant.design',
        title: 'Harry Potter and the Sorcers Stone' ,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Book review by Felix Kjellburg',
        likes : 25, 
        stars : 40, 
        comments: 3, 
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }
    
  }

return (
  <div>
  <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />

  <Content style={{ margin: '24px 16px 0' }}>
  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

  <ListItem 
  listData={listData}
  />  

  </div>
  </Content>
  </div>
)
}

export default BlogPage