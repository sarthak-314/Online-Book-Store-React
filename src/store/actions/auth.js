import axios from 'axios'
import * as actionTypes from './actionTypes'
import React from 'react'
import { DJANGO_API_URL } from '../../components/constants'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key
            localStorage.setItem('token', token)
            dispatch(authSuccess(token))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const updateProfilePic = pic => {
    if(pic !== ''){
    return {
        type: actionTypes.UPDATE_PIC, 
        pic: pic
    }
}
}

export const authSignup = (username, email, password1, password2, avatar, phoneNum) => {
    return dispatch => {
        dispatch(authStart())
        username = username.replace(/ /g, "")
        return axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        // .then(res => {
        //     const token = res.data.key
        //     localStorage.setItem('token', token)
        //     dispatch(authSuccess(token))
        //     console.log(token)
        //     axios({
        //         method: 'post',
        //         url: DJANGO_API_URL + '/user/create-profile/',
        //         data: avatar,
        //         headers: {
        //             'Authorization' : `Token ${token}`, 
        //             'Content-Type':'multipart/form-data'
        //         }
        //      })
        //      .then(res => console.log(res))
        //      .catch(err => console.log(err))
            
        //     // const url = 'http://127.0.0.1:8000/api/user/create-profile/'
        //     // const data = {
        //     //     'profile_pic': avatar            
        //     // }
        //     // const authHeader = {'Authorization' : `Token ${token}`, 'content-type': 'application/x-www-form-urlencoded'}
             
            
        // })
        // .catch(err => {
        //     dispatch(authFail(err))
        // })  
    }
}
