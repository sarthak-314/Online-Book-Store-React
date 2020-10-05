import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions/auth'
import { useDropzone } from 'react-dropzone'
import { Spin, Alert } from 'antd'

const SignUp = props => {
   const { toggleSignup, history } = props
   const dispatch = useDispatch()

    const onSignupHandler = (event) => {
      event.preventDefault()
      console.log(avatar)
      setLoading(true)
      dispatch(actions.authSignup(name, email, password, confPassword, avatar, phone))
      history.push('/')

    }
    const [name, setName] = useState('')
    const [nameFocus, setNameFocus] = useState(0) //0 for nothin' 1 for yea -1 for neaaa
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [avatar, setAvatar] = useState(null)
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)

      const onDrop = useCallback(acceptedFiles => {
         const profilePic = new FormData()
         profilePic.append('avatar', acceptedFiles[0])

         setAvatar(profilePic)
      }, [])

      const {getRootProps, getInputProps} = useDropzone({onDrop})

      const Spinner = <Spin tip="Signing You Up....."/>
      const CustomAlert = <Alert style={{marginTop: '20px'}}
      message={alert}
      type="error"
      />

    return ( 
       loading 
       ? 
      {Spinner}
       :
    <div class='signup form-peice'>
    <form class="signup-form" action="#">
    <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
         <div class="CTA">
            <input id="submit" value="Upload Profile Picture" style={{textAlign : 'center', marginTop: '-30px'}} class='upload-ppic'
            onClick={e => e.preventDefault()}/>
         </div>
          }
        </div>
        {alert ? CustomAlert : null }
       <div class={`${nameFocus === -1 ? 'hasError form-group' : 'form-group'}`}>
          <label for="name" class={`${nameFocus === 1 ? 'active' : ''}`}>Username</label>
          <input type="text" name="username" id="name" class="name"
           onChange={e => setName(e.target.value)} onFocus={() => setNameFocus(1)}/>
          <span class="error"> works? </span>
       </div>

       <div class="form-group">
          <label for="email" class={`${email !== '' ? 'active' : ''}`}>Email Adderss</label>
          <input type="email" name="emailAdress" id="email" class="email" onChange={e => setEmail(e.target.value)}/>
          <span class="error"></span>
       </div>

       <div class="form-group">
          <label for="phone" class={`${phone !== '' ? 'active' : ''}`}>Phone Number - <small>Optional</small></label>
          <input type="text" name="phone" id="phone" onChange={e => setPhone(e.target.value)}/>
       </div>

       <div class="form-group">
          <label for="password" class={`${password !== '' ? 'active' : ''}`}>Password</label>
          <input type="password" name="password" id="password" class="pass" onChange={e => setPassword(e.target.value)}/>
          <span class="error"></span>
       </div>

       <div class="form-group">
          <label for="passwordCon" class={`${confPassword !== '' ? 'active' : ''}`}>Confirm Password</label>
          <input type="password" name="passwordCon" id="passwordCon" class="passConfirm"  onChange={e => setConfPassword(e.target.value)}/>
          <span class="error"></span>
       </div>

       <div class="CTA">
          <input type="submit" value="Signup Now" id="submit" onClick={e => onSignupHandler(e)}/>
          <a href="#" class="switch" onClick={() => toggleSignup(false)} stye>I have an account</a>
       </div>
    </form>
 </div>
 )
}

export default SignUp