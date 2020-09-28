import React, { useState } from 'react'

const MainInfo = (props) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')

    return (
        <div>
    <div class="row">

    <div class="col-md-6 mb-2">

      <div class="md-form ">
        <input type="text" id="firstName" class="form-control"
        onChange={e => setFirstName(e.target.value)}/>

        <label for="firstName" class="">First name</label>
      </div>

    </div>

    <div class="col-md-6 mb-2">

      <div class="md-form">
        <input type="text" id="lastName" class="form-control"
        onChange={e => setLastName(e.target.value)}/>

        <label for="lastName" class="">Last name</label>
      </div>

    </div>

  </div>

  <br/>
  <div class="md-form mb-5">
    <input type="text" id="email" class="form-control" placeholder="youremail@example.com"
    onChange={e => setEmail(e.target.value)}/>
    <label for="email" class="">Email</label>
  </div>

  <div class="md-form mb-5">
    <input type="text" id="address" class="form-control" placeholder="1234 Main St"
    onChange={e => setAddress(e.target.value)}/>
    <label for="address" class="">Address</label>
  </div>

  <div class="md-form mb-5">
    <input type="text" id="address-2" class="form-control" placeholder="Apartment or suite"
    onChange={e => setAddress2(e.target.value)}/>
    
    <label for="address-2" class="">Address 2 (optional)</label>
  </div>
</div>
    )
}

export default MainInfo