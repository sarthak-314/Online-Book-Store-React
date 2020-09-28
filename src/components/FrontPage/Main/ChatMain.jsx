import React from 'react'

const ChatMain = props => {
	const { sellerImg, sellerName } = props
	return (
	<div class="author">
     <img src={sellerImg}alt="" class="author-img"/>
     <div class="author-name">{sellerName}</div>
    </div>
   
	)
}

export default ChatMain