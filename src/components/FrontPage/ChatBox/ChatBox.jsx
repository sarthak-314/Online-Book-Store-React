import React from 'react'
import './ChatBox.scss'
import { MessageOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { Badge } from 'antd'

const ChatBox = props => {
    const history = useHistory()
    return (
<>
<div id="body"> 
<div id="chat-circle" class="btn btn-raised" onClick={() => history.push('/chat')}>
        <div id="chat-overlay"></div>
		    <i class="chat-icon">
                <MessageOutlined/>
            </i>
	</div>
</div>
</>

)
}

export default ChatBox