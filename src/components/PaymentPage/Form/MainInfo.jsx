import React from 'react'

const MainInfo = (props) => {
    return (
        <div>
    <div class="row">

    <div class="col-md-6 mb-2">

      <div class="md-form ">
        <input type="text" id="firstName" class="form-control"/>
        <label for="firstName" class="">First name</label>
      </div>

    </div>

    <div class="col-md-6 mb-2">

      <div class="md-form">
        <input type="text" id="lastName" class="form-control"/>
        <label for="lastName" class="">Last name</label>
      </div>

    </div>

  </div>

  <div class="md-form input-group pl-0 mb-5">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">@</span>
    </div>
    <input type="text" class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1"/>
  </div>

  <div class="md-form mb-5">
    <input type="text" id="email" class="form-control" placeholder="youremail@example.com"/>
    <label for="email" class="">Email (optional)</label>
  </div>

  <div class="md-form mb-5">
    <input type="text" id="address" class="form-control" placeholder="1234 Main St"/>
    <label for="address" class="">Address</label>
  </div>

  <div class="md-form mb-5">
    <input type="text" id="address-2" class="form-control" placeholder="Apartment or suite"/>
    <label for="address-2" class="">Address 2 (optional)</label>
  </div>
</div>
    )
}

export default MainInfo