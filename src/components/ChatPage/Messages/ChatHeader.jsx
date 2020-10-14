import React from 'react'

const ChatHeader = props => {
  let header = 'Online Book Store Developer'
  if(props.showList == 1){
    header = 'You both like Dummy Book by Dummy Dude'
  } 
  if(props.showList == 2){
    header = `${props.receiver} is interested in your book Dummy Book`
  }
	return (
		<div class="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
        
        <div class="chat-about">
  <div class="chat-with">Chat with {props.receiver}</div>
  <div class="chat-num-messages">{header}</div>
        </div>
        <i class="fa fa-star"></i>
      </div>
      
	)
}

export default ChatHeader