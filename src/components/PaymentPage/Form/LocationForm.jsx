import React, { useState } from 'react'

const LocationForm = (props) => {
  
  const [country, setCountry] = useState(0)
  const [zipcode, setZipcode] = useState('')

return (
<div class="row">

<div class="col-lg-4 col-md-12 mb-4">

  <label for="country">Country</label>
  <select class="custom-select d-block w-100" id="country" required>
    <option onClick={() => setCountry(1)}>India</option>
    <option onClick={() => setCountry(2)}>United States</option>
    <option>Other</option>
  </select>
  <div class="invalid-feedback">
    Please select a valid country.
  </div>

</div>

<div class="col-lg-4 col-md-6 mb-4">
</div>

<div class="col-lg-4 col-md-6 mb-4">

  <label for="zip">Zip</label>
  <input type="text" class="form-control" id="zip" placeholder="" required
  onChange={e => setZipcode(e.target.value)}/>
  
  <div class="invalid-feedback">
    Zip code required.
  </div>

</div>

</div>
    )
}

export default LocationForm