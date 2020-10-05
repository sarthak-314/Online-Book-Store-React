import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Avatar, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';


const NavBar = props => {

  const [searchTerms, setSearchTerms] = useState('')
  const pic = useSelector(state => state.pic)  
  const history = useHistory()
  const [showCart, setShowCart] = useState(false)

	return (
<div class="header">
  <div class="browse">
   <div class="browse-category">
   </div>
   <a href='https://github.com/sarthak-314' target='_blank'>
   <div className='med-git'>
    Github
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
    </div>
  </a>
   <span className='med-git-sep'>|</span>
   <a href='https://medium.com/@sarthak.bhatt314' target='_blank'>
   <div className='med-git'>
   Medium
   <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"/></svg>
   </div>
   </a>
   <div class="profile-menu" onClick={() => history.push('/blog')}>
    Online Book Store's Blog
   </div>
    
  </div>
  <div class="header-title" 
  onClick={() => history.push('/')}>ONLINE <span>BOOK</span> STORE</div>
  <div class="profile">
    {
    showCart ? 
    <div class="user-profile" style={{marginRight: '20px'}}>
    <span className="avatar-item user-img">
       <Badge count={0}>
         <ShoppingCartOutlined style={{fontSize: '35px'}}/>
       </Badge>
     </span>
    </div>
     
    : 
    null    
    }
   <Link to='/signup'>
   <div class="user-profile">
    <img src={pic} alt="" class="user-img"/>
   </div>
   </Link>
   <div class="profile-menu" onClick={() => history.push('/upload')}
   style={{marginLeft: '20px'}}>
   + ADD A BOOK
   </div>
   
  </div>
 </div>
 
	)
}

export default NavBar