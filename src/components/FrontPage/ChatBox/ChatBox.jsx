import React, { useState } from 'react'
import './ChatBox.scss'
import { MessageOutlined, CoffeeOutlined, ChromeOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { Badge } from 'antd'

const ChatBox = props => {
    const history = useHistory()
// Maybe make the state global, boi
    const [showChrome, setShowChrome] = useState(true)
    const [showBlog, setShowBlog] = useState(true)

    const coffeeClickHandler = () => {
        setShowBlog(false)
        history.push('/blog')
    }

    const chromeClickHanler = () => {
        setShowChrome(false)

    }

    return (
<>
<div id="body"> 
<div id="chat-circle" class="btn btn-raised" onClick={() => history.push('/chat')}>
        <div id="chat-overlay"></div>
		    <i class="chat-icon">
                <MessageOutlined/>
            </i>
	</div>
{showBlog ? 
<div id="blog-circle" class="btn btn-raised" onClick={coffeeClickHandler}>
    <div id="chat-overlay"></div>
        <i class="chat-icon">
        <CoffeeOutlined />
        </i>
</div>
: 
null
}
{
showChrome ? 
<div id="chrome-circle" class="btn btn-raised" onClick={chromeClickHanler}>
    <div id="chat-overlay"></div>
        <i class="chat-icon">
        <ChromeOutlined />
    </i>
</div>
: 
null
}
</div>

</>

)
}

export default ChatBox