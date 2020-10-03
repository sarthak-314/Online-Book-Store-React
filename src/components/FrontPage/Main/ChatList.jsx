import React, { useState } from 'react'
import ChatMain from './ChatMain'

const ChatList = props => {
    const [chatSellerList, setChatSellerList] = useState([{
    sellerName:"Felix Kjellburg",
    sellerImg:"https://www.businessinsider.in/thumb/msid-70659350,width-680,resizemode-4,imgsize-59336/PewDiePie-and-T-Series-quietly-settled-a-court-battle-over-his-racist-diss-tracks-following-their-epic-YouTube-battle.jpg"
     }])

    return (
    <div>
        {chatSellerList.map(seller => 
      <ChatMain
      sellerName = {seller.sellerName}
      sellerImg = {seller.sellerImg}
      />
    )}
   
    </div>)
}

export default ChatList