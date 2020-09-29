import React from 'react'
import { useHistory } from 'react-router-dom'

const ChatMain = props => {
	const { sellerImg, sellerName } = props
	const history = useHistory()
	return (
	<div class="author" onClick={() => history.push(`/chat?with=${sellerName}`)}>
     <img src={sellerImg}alt="" class="author-img"/>
     <div class="author-name">{sellerName}</div>
    </div>
	)
}

export default ChatMain