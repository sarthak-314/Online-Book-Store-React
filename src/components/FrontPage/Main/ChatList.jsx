import React, { useState } from 'react'
import ChatMain from './ChatMain'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as actions from '../../../store/actions/auth'
import Axios from 'axios'
import { DJANGO_API_URL } from '../../constants'


const ChatList = props => {

    const dispatch = useDispatch()

    const [chatSellerList, setChatSellerList] = useState([{
    name:"Felix Kjellburg",
    avatar:"https://www.businessinsider.in/thumb/msid-70659350,width-680,resizemode-4,imgsize-59336/PewDiePie-and-T-Series-quietly-settled-a-court-battle-over-his-racist-diss-tracks-following-their-epic-YouTube-battle.jpg"
     }])

     const friends = useSelector(state => state.friends)
     useEffect(() => {
      dispatch(actions.getFriends())
      setChatSellerList(friends)
    }, [friends])

    return (
    <div>
        {chatSellerList.map(seller => 
      <ChatMain
      sellerName = {seller.name}
      sellerImg = {seller.avatar}
      />
    )}
   
    </div>)
}

export default ChatList