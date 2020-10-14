import React, { useState, useEffect } from 'react'

const COUPONS = ['BASICALLYFREE', 'FIRSTPURCHASE50OFF']

const Coupon = props => {

    const { coupon, total, setTotal } = props

    const [discount, setDiscount] = useState(0)
    const [error, setError] = useState('')

    useEffect(() => {
        if(coupon == COUPONS[0]){
            setDiscount(total - 1)
            setTotal(1)
            setError('')
        } else if (coupon == COUPONS[1]){
            setTotal(total * 0.5)
            setDiscount(total * 0.5)
        } else {
            setError('Invalid Code')
        }
    }, [coupon])

    return (
        <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
    <small>{coupon}</small>
              </div>
    <span class="text-success">{error} -Rs.{discount}</span>
            </li>
    )
}

export default Coupon