import React from 'react'
import YourCart from './YourCart'
import MainForm from './MainForm'

const PaymentPage = () => {

  //Add that cool message thingy uip at the top, looks lit

    return (
<body class="grey lighten-3"> 

  <main class="mt-5 pt-4">
    <div class="container wow fadeIn">
      <h2 class="my-5 h2 text-center">Checkout form</h2>
      <div class="row">

        <MainForm/>
        <YourCart/>

      </div>

    </div>
  </main>

  
</body>


    )
}

export default PaymentPage