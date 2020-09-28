import React from 'react'

const LocationForm = (props) => {
    return (
<div class="row">

<div class="col-lg-4 col-md-12 mb-4">

  <label for="country">Country</label>
  <select class="custom-select d-block w-100" id="country" required>
    <option value="">Choose...</option>
    <option>United States</option>
  </select>
  <div class="invalid-feedback">
    Please select a valid country.
  </div>

</div>

<div class="col-lg-4 col-md-6 mb-4">

  <label for="state">State</label>
  <select class="custom-select d-block w-100" id="state" required>
    <option value="">Choose...</option>
    <option>California</option>
  </select>
  <div class="invalid-feedback">
    Please provide a valid state.
  </div>

</div>

<div class="col-lg-4 col-md-6 mb-4">

  <label for="zip">Zip</label>
  <input type="text" class="form-control" id="zip" placeholder="" required/>
  <div class="invalid-feedback">
    Zip code required.
  </div>

</div>

</div>
    )
}

export default LocationForm