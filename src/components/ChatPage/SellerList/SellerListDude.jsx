import React from 'react'

const SellerListDude = props => {

  const { name, img, status, statusMsg } = props

  return (
    <li class="clearfix">
          <img src={img} alt="avatar" />
          <div class="about">
            <div class="name">{name}</div>
            <div class="status">
              <i class={status === 'online' ? 'fa fa-circle online' : 'fa fa-circle offline'}></i> {statusMsg}
            </div>
          </div>
    </li>
        
  )
}

export default SellerListDude