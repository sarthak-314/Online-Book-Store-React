import React, { useState } from 'react'
import axios from 'axios'
import { DJANGO_BASE_URL } from '../constants'
import { Alert } from 'antd'
import * as actions from '../../store/actions/auth'
import { useDispatch, useSelector } from 'react-redux'


const Login = props => {
   const { toggleSignup, history } = props

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')
    const [alert, setAlert] = useState(false)

    const dispatch = useDispatch()

    const onLoginHandler = (e) => {
      e.preventDefault()
      dispatch(actions.authLogin(name, email, loginPass))
      history.push('/')
   }
    const LoginAlert = <Alert style={{marginTop: '20px'}}
    message={alert}
    type="error"
    />

    return (
        <div class="login form-peice">
        <form class="login-form" action="#" method="post">
        {alert ? LoginAlert : null }
           <div class="form-group">
              <label for="loginemail" class={`${name !== '' ? 'active' : ''}`}>Username</label>
              <input type="email" name="loginemail" id="loginemail" required
                    onChange={(e) => setName(e.target.value)}/>
           </div>
           
           <div class="form-group">
              <label for="loginemail" class={`${name !== '' ? 'active' : ''}`}>Email</label>
              <input type="email" name="loginemail" id="loginemail" required
                    onChange={(e) => setEmail(e.target.value)}/>
           </div>

           <div class="form-group">
              <label for="loginPassword" class={`${loginPass !== '' ? 'active' : ''}`}>Password</label>
              <input type="password" name="loginPassword" id="loginPassword" required
                     onChange={e => setLoginPass(e.target.value)}/>
           </div>

           <div class="CTA">
              <input type="submit" value="Login" onClick={onLoginHandler}/>
              <a href="#" class="switch" onClick={() => toggleSignup(true)}>I'm New to OnlineBookStore</a>
           </div>
        </form>
     </div>
    )
}

export default Login