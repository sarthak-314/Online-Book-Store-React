import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import { Layout, Button} from 'antd'
import axios from 'axios'
import { getBlogs } from '../utils/articleListSerializer'
import { DJANGO_API_URL } from '../../constants'
const { Header, Content} = Layout

const BlogPage = props => {

  const [listData, setListData] = useState([])

  useEffect(() => {
    getListData()
  }, [])

  const getListData = () => {
    getBlogs().then(res => setListData(res))
    setListData(listData)
  }

return (
  <div>
  <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />

  <Content style={{ margin: '24px 16px 0' }}>
  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

  <ListItem 
  setNavItem={props.setNavItem}
  setBlogArticle={props.setBlogArticle}
  listData={listData}
  />  
  <Button type="primary" onClick={() => props.setNavItem(2)}>
    Write A Book Review
    </Button>

  </div>
  </Content>
  </div>
)
}

export default BlogPage