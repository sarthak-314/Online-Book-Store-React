import React, { useState } from 'react'
import AddressInfo from './Form/AddressInfo'
import CardPayment from './Form/CardPayment'
import LocationForm from './Form/LocationForm'
import MainInfo from './Form/MainInfo'

const MainForm = (props) => {

  const [payment, setPayment] = useState(0)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
    
    return (
<div class="col-md-8 mb-4">
    <div class="card">
    <form class="card-body">
        <MainInfo
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        />
        <LocationForm/>
        <hr/>
        <AddressInfo/>
        <hr/>
        <CardPayment
        payment={payment}
        setPayment={setPayment}/>
        <hr class="mb-4"/>

    <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>

    </form>
    </div>
</div>


    )
}

export default MainForm 