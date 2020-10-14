import React from 'react'

const SendMessageArea = props => {

    const { setMsgTxt, msgTxt, onSendMsg } = props

    return (
        <div class="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"
			onChange = {e => setMsgTxt(e.target.value)}
			value = {msgTxt}
			onKeyPress = {event => event.key === 'Enter' ? onSendMsg(event) : null } 	
			/> 
        <button onClick={e => onSendMsg(e)}>Send</button>
      </div>
    )
}

export default SendMessageArea