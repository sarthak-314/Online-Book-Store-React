// feature tour after sign-in boi??

import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'
import SellerList from './SellerList/SellerList'
import ChatHeader from './Messages/ChatHeader'
import Messages from './Messages/Messages'
import './Chat.scss'
import SendMessageArea from './Messages/SendMessageArea'

// Front end gives me : 
// user, seller, sellerList, bookName
// Back end gives me : 
// buyerList, 
let socket
const Chat = props => {

	//Get from TextField
	const [msgTxt, setMsgTxt] = useState('')
	// messages : text, isMe, time, role='buyer' ; get from server
	const [messages, setMessages] = useState([])
	// get from props, change if some seller or buyer is clicked on
	const [role, setRole] = useState('buyer')
	const [meName, setMeName] = useState('')
	// Name of receiver - get from querystring, role = !role
	const [receiver, setReceiver] = useState('')
	const [room, setRoom] = useState('')

	const ENDPOINT = 'localhost:5000'

	// Join the connection
	// useEffect(() => {
		
	// 	const { buyer, seller, role } = queryString.parse(props.location.search)
	// 	setRole(role)
	// 	const room = buyer.concat('0', seller)
	// 	setRoom(room)
	// 	if(role === 'buyer'){
	// 		setReceiver(seller)
	// 		setMeName(buyer)
	// 	} else {
	// 		setReceiver(buyer)
	// 		setMeName(seller)
	// 	}

	// 	socket = io(ENDPOINT)
	// 	//tell the server you joined
	// 	socket.emit('join', { meName, room, receiver, role }, error => {
	// 		if(error) alert(error)
	// 	})

	// }, [ENDPOINT, props.location.search])

	// useEffect(() => {
	// 	socket.on('message', ({ text, sender, role, time }) => {
	// 		const isMe = sender === meName ? true : false
	// 		const newMsg = { text, isMe, time, role }
	// 		setMessages([...messages, newMsg])
	// 	})
	// })

	// const onSendMsg = event => {
	// 	event.preventDefault()
	// 	if(msgTxt) {
	// 		const newMsg = {text: msgTxt, role, room, sender: meName}
	// 		socket.emit('sendMsgToServer', newMsg, () => setMsgTxt(''))
			
	// 	}
	// }

	return (
		<div class='chat-body'>
		  <div class="container-boi clearfix">
		  <SellerList/>
    <div class="chat">
      <ChatHeader/>
      <div class="chat-history">
        <ul style={{listStyleType: 'none'}}>
         <Messages messages={messages} meName={meName} receiver={receiver}/> 
        </ul>
      </div>
      <SendMessageArea/> 
    </div>
  </div> 
</div>
	)
}

export default Chat