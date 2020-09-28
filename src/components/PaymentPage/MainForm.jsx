import React from 'react'
import AddressInfo from './Form/AddressInfo'
import CardPayment from './Form/CardPayment'
import LocationForm from './Form/LocationForm'
import MainInfo from './Form/MainInfo'

const MainForm = (props) => {

    
    
    return (
<div class="col-md-8 mb-4">
    <div class="card">

    <form class="card-body">
        <MainInfo/>
        <LocationForm/>
        <hr/>
        <AddressInfo/>
        <hr/>
        <CardPayment/>
        <hr class="mb-4"/>

    <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>

    </form>
    </div>
</div>


    )
}

export default MainForm 