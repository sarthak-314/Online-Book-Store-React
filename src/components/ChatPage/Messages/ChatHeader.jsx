import React from 'react'

const ChatHeader = props => {

	return (
		<div class="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
        
        <div class="chat-about">
          <div class="chat-with">Chat with Vincent Porter</div>
          <div class="chat-num-messages">Game of thrones</div>
        </div>
        <i class="fa fa-star"></i>
      </div>
      
	)
}

export default ChatHeader