import React from 'react'
import { Layout} from 'antd';
import BlogPostContent from './BlogPostContent';
import NavBar from '../Commons/NavBar'

const { Header, Content, Footer, Sider } = Layout;


const CustomLayout = props => {

return (
  <Layout>
        <NavBar/>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <div style={{margin: '25px'}}>
          <BlogPostContent/>
    </div>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
)
}

export default CustomLayout