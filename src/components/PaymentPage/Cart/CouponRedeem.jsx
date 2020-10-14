import React from 'react'

const CouponRedeem = props => {

    const { setCoupon, redeemCouponHandler } = props

    const onEnterPressHandler = e => {
      e.preventDefault()
      redeemCouponHandler()
    }

    return (
        <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2"
                onChange={e => setCoupon(e.target.value)}              
              />
              <div class="input-group-append">
                <button class="btn btn-secondary btn-md waves-effect m-0" type="button"
                onKeyPress={event => event.key == 'Enter' ? onEnterPressHandler(event) : null } 	
                onClick={e => redeemCouponHandler(e)}
                >Redeem</button>
              </div>
            </div>
          </form>
    )
}

export default CouponRedeem