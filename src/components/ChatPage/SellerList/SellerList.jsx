import React, { useState } from 'react'
import SellerListDude from './SellerListDude'


const SellerList = props => {

  const sellers = props.sellerList
  const img = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
  const status = 'offline'
  const statusMsg =  'Offline'


	return (
    <div class="people-list" id="people-list">
      <ul class="list" style={{listStyleType : 'none'}}>
        
        {sellers.map(seller => 
          <SellerListDude
          onClick={() => props.setChattingWith(seller)}
          name={seller.name}
          img={img}
          status={status}
          statusMsg={statusMsg}
          />
        )}
        </ul>
    </div>
    
	)
}

export default SellerList
