import React from 'react'
import { Radio } from 'antd'

const CardPayment = (props) => {
  
  const { payment, setPayment } = props

  return (
        <div>
        <div class="d-block my-3">
        <Radio.Group onChange={e => setPayment(e.target.value)} value={payment}>
        <Radio value={1}>Stripe</Radio>
        <Radio value={2}>Paypal</Radio>
        <Radio value={3}>Credit Card</Radio>
      </Radio.Group>
      </div>
      
      {(payment == 3 || payment == 0) 
      ? <>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="cc-name">Name on card</label>
          <input type="text" class="form-control" id="cc-name" placeholder="" required/>
          <small class="text-muted">Don't actually enter your credit card information. I don't know cybersecurity.</small>

          <div class="invalid-feedback">
            Name on card is required
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="cc-number">Credit card number</label>
          <input type="text" class="form-control" id="cc-number" placeholder="" required/>
          <div class="invalid-feedback">
            Credit card number is required
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 mb-3">
          <label for="cc-expiration">Expiration</label>
          <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
          <div class="invalid-feedback">
            Expiration date required
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="cc-expiration">CVV</label>
          <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
          <div class="invalid-feedback">
            Security code required

          </div>
        </div>
  
      </div>
    </>      
      :null}
      
      </div>

    )
}

export default CardPayment