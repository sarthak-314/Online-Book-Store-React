import React, { useState } from 'react'
import Msg from './Msg'
import MsgSeller from './MsgSeller'

var allMessages
const Messages = ({ messages, meName, receiver }) => {

	var allMessages = []
	for(let i = 0; i < messages.length; i++){
		const message = messages[i]
		if(message.isMe){
			var newMsg = <Msg name={meName} time='10:10AM' msg={message.text}/>
			allMessages.push(newMsg)
		} else {
			var newMsg = <MsgSeller name={receiver} time='10:10 AM' msg={message.text}/>
			allMessages.push(newMsg)
		}
	}

	return (<div>
		{allMessages.map(msg => msg)}
		</div>
	)
}

export default Messages