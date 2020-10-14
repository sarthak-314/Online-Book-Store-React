import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import ChatStyle from './ChatStyle'

let socket
const Chat = props => {

	const { chattingWith, myInfo } = props
	const receiver = chattingWith.name
	const sender = myInfo.name

	const [msgTxt, setMsgTxt] = useState('')
	const [messages, setMessages] = useState([])
	const [room, setRoom] = useState('')

	const ENDPOINT = 'localhost:5000'

	useEffect(() => {
		const room = sender.concat('sendto', receiver)
		setRoom(room)
		socket = io(ENDPOINT)
		socket.emit('join', { sender, room }, error => {
			if(error) alert(error)
		})
	}, [])

	useEffect(() => {
		socket.on('message', ({ text, senderName, time }) => {
			const isMe = senderName === sender ? true : false
			const newMsg = { text, isMe, time }
			setMessages([...messages, newMsg])
			console.log(messages)
		})
	})

	const onSendMsg = event => {
		event.preventDefault()
		if(msgTxt) {
			const message = {text: msgTxt, room, sender: sender}
			setMessages([...messages, {text:msgTxt, isMe: false, time: 'a few seconds ago'}])
			setMsgTxt('')
			socket.emit('sendMessage', message, () => setMsgTxt(''))
		}
	}

	return (
		<ChatStyle
		setChattingWith={props.setChattingWith}
		messages={messages}
		sender={sender}
		receiver={receiver}
		friends={props.friends}
		buyers={props.buyers}
		sarthak={props.sarthak}
		showList={props.showList}
		msgTxt={msgTxt}
		onSendMsg={onSendMsg}
		setMsgTxt={setMsgTxt}
		/>
	)
}

export default Chat