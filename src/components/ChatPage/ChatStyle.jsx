import React, { useState, useEffect } from 'react'
import SellerList from './SellerList/SellerList'
import Messages from './Messages/Messages'
import './Chat.scss'
import SendMessageArea from './Messages/SendMessageArea'

const ChatStyle = props => {

    const { messages, sender, receiver, msgTxt } = props
	const { onSendMsg, setMsgTxt } = props
	
	const List = [props.friends, props.buyers, props.sarthak]
	const sellerList = List[props.showList-1]

	return (
<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
<div class='chat-body'>
	<div class="container-boi clearfix">

		<SellerList
		setChattingWith={props.setChattingWith}
		sellerList={sellerList}
		/>
	<div class="chat">
         <Messages messages={messages} meName={sender} receiver={receiver} showList={props.showList}/> 
      <SendMessageArea
		onSendMsg={onSendMsg}
		msgTxt={msgTxt}
		setMsgTxt={setMsgTxt}
	  /> 
    </div>
  </div> 
</div>
</div>
	)
}

export default ChatStyle