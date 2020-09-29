import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions/auth'
import { useDropzone } from 'react-dropzone'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
const SignUp = ({ toggleSignup }) => {

    const dispatch = useDispatch()
    
    const onSignupHandler = (event) => {
      event.preventDefault()
      // const success = dispatch(actions.authSignup(name, email, password, confPassword, avatar, phone))
      // if(success){
      //    return <Redirect to="/"/>
      // }
      
      const token = localStorage.getItem('token')
      // dispatch(authSuccess(token))
      console.log(token)
      // make the user profile
      const url = 'http://127.0.0.1:8000/api/user/create-profile/'
      const data = {
            'profile_pic': avatar, 
            'phone_num': phone
      }
      
      const authHeader = {'Authorization' : `Token ${token}`} 
      axios.post(url, data, {
          headers: authHeader
      }).then(res => {
          if(res.status == 200){
              console.log(res)
              return true
          }
      }).catch(err => console.log(err))

    }

    const profilePicUploadHandler = event => {
       event.preventDefault()
       
    }

    const [name, setName] = useState('')
    const [nameFocus, setNameFocus] = useState(0) //0 for nothin' 1 for yea -1 for neaaa
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [avatar, setAvatar] = useState(null)

      const onDrop = useCallback(acceptedFiles => {
         const profilePic = new FormData()
         profilePic.append('file', acceptedFiles[0])
         setAvatar(profilePic)
      }, [])

      const {getRootProps, getInputProps} = useDropzone({onDrop})
     
    return ( 
    <div class='signup form-peice'>
    <form class="signup-form" action="#">
    <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
         <div class="CTA">
            <input type="submit" value={`${avatar ? "Click to change your pic" : "Upload Profile Pic"}`}id="submit"
            onClick={e => e.preventDefault()}/>
         </div>
          }
        </div>
       <div class={`${nameFocus === -1 ? 'hasError form-group' : 'form-group'}`}>
          <label for="name" class={`${nameFocus === 1 ? 'active' : ''}`}>Full Name</label>
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
          <a href="#" class="switch" onClick={() => toggleSignup(false)}>I have an account</a>
       </div>
    </form>
 </div>
 )
}

export default SignUp