import React, { useState } from 'react'
import Msg from './Msg'
import MsgSeller from './MsgSeller'
import ChatHeader from './ChatHeader'

const Messages = props => {
	const { messages, meName, receiver } = props
	var allMessages = []
	if(receiver == 'Sarthak Bhatt'){
		var newMsg = <MsgSeller name='Sarthak Bhatt' time='A long time ago' msg='Let me know what do think of the website so far?'/>
		allMessages.push(newMsg)		
	}
	for(let i = 0; i < messages.length; i++){
		const message = messages[i]
		if(!message.isMe){
			var newMsg = <Msg name={meName} time='10:10AM' msg={message.text}/>
			allMessages.push(newMsg)
		} else {
			var newMsg = <MsgSeller name={receiver} time='10:10 AM' msg={message.text}/>
			allMessages.push(newMsg)
		}
	}

	return (<div>
      <ChatHeader
	  receiver={receiver}
	  showList={props.showList}
	  sender={meName}
	  />
		<div class="chat-history">
        <ul style={{listStyleType: 'none'}}>
		{allMessages.map(msg => msg)}
		</ul>
		</div>
		</div>
	)
}

export default Messages