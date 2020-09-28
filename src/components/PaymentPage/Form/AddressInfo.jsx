import React from 'react'

const AddressInfo = (props) => {
    return (
        <div>
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="same-address"/>
        <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="save-info"/>
        <label class="custom-control-label" for="save-info">Save this information for next time</label>
      </div>
      </div>
    )
}

export default AddressInfo