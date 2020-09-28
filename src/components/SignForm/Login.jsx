import React, { useState } from 'react'

const Login = ({ toggleSignup }) => {

    const [name, setName] = useState('')
    const [loginPass, setLoginPass] = useState('')
 
    return (
        <div class="login form-peice">
        <form class="login-form" action="#" method="post">
           <div class="form-group">
              <label for="loginemail" class={`${name !== '' ? 'active' : ''}`}>Full Name</label>
              <input type="email" name="loginemail" id="loginemail" required
                    onChange={(e) => setName(e.target.value)}/>
           </div>

           <div class="form-group">
              <label for="loginPassword" class={`${loginPass !== '' ? 'active' : ''}`}>Password</label>
              <input type="password" name="loginPassword" id="loginPassword" required
                     onChange={e => setLoginPass(e.target.value)}/>
           </div>

           <div class="CTA">
              <input type="submit" value="Login"/>
              <a href="#" class="switch" onClick={() => toggleSignup(true)}>I'm New to OnlineBookStore</a>
           </div>
        </form>
     </div>
    )
}

export default Login