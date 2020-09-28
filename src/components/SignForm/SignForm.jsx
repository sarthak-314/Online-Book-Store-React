import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './SignForm.scss'

import Signup from './Signup'
import Login from './Login'

const SignForm = props => {
   
   const textInput = useRef(null)

   const [showSignup, setShowSignup] = useState(true)

   const toggleSignup = () => {
      const showLogin = !showSignup
      setShowSignup(showLogin)
   }

	return (

<div class="container">
   <section id="formHolder">

      <div class="row">

         <div class="col-sm-6 brand">
            <a href="#" class="logo"> OBS <span>.</span></a>

            <div class="heading">
               <h2>OnlineBooks</h2>
               <p>Your Online Home for Books</p>
               <br/>
               <div className='btn-boi-good'>Login with Goodreads</div>
            </div>
         </div>


         <div class="col-sm-6 form">

            {showSignup 
            ?
             <Signup toggleSignup={toggleSignup}/>
            :
            <Login toggleSignup={toggleSignup}/>
            }
         </div>
      </div>

   </section>

</div>

	)
}

export default SignForm
