import React, { useState } from 'react'
import { Layout} from 'antd'
import BlogPostContent from './BlogPost/BlogPostContent'
import ArticleListContent from './ArticleList/ArticleListContent'
import WriteUpContent from './WriteUp/WriteUpContent'
import NavBar from './SideBar'

const { Header, Content, Footer, Sider } = Layout;


const BlogPage = props => {
    const [navItem, setNavItem] = useState(0)
    const CONTENT_COMPONENTS = [<ArticleListContent/>, <BlogPostContent/>, <WriteUpContent/>]

return (
  <Layout>
        <NavBar 
        setNavItem={setNavItem}/>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <div style={{margin: '25px'}}>
       
          {CONTENT_COMPONENTS[navItem]}
    
    </div>
    </Layout>
  </Layout>
)
}

export default BlogPage