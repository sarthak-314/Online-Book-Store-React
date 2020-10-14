import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductList from './Cart/ProductList'
import Coupon from './Cart/Coupon'
import CouponRedeem from './Cart/CouponRedeem'


const YourCart = () => {

  const cart = useSelector(state => state.cart)
  var i
  var sum = 0
  for(i in cart){
    const item = cart[i]
    sum += item.price
  }

  const [total, setTotal] = useState(sum)
  const [coupon, setCoupon] = useState('')
  const [showCoupon, setShowCoupon] = useState(false)
  const [couponEnter, setCouponEnter] = useState('')

  const redeemCouponHandler = e => {
    setCoupon(couponEnter)
    setShowCoupon(true)
  }

  return (

        <div class="col-md-4 mb-4">

          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill"> {cart.length} </span>
          </h4>
          <ul class="list-group mb-3 z-depth-1">
          
          <ProductList/>

          {showCoupon ? <Coupon
          coupon={coupon}
          total={total}
          setTotal={setTotal}
          /> : null}

            <li class="list-group-item d-flex justify-content-between">
              <span>Total (INR)</span>
          <strong>Rs.{total}</strong>
            </li>
          </ul>

          <CouponRedeem
          setCoupon={setCouponEnter}
          redeemCouponHandler={redeemCouponHandler}
          />

        </div>
    )
}

export default YourCart