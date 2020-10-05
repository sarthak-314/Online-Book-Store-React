import React, { useState } from 'react'
import SellerListDude from './SellerListDude'


const SellerList = props => {

  const [sellers, setSellers] = useState([{
    name: 'Vincent Porter',
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg",
    status: 'online',
    statusMsg: 'online',
  }
  ])

	return (
    <div class="people-list" id="people-list">
      <ul class="list" style={{listStyleType : 'none'}}>
        
        {sellers.map(seller => 
          <SellerListDude
          name={seller.name}
          img={seller.img}
          status={seller.status}
          statusMsg={seller.statusMsg}
          />
        )}
        </ul>
    </div>
    
	)
}

export default SellerList
