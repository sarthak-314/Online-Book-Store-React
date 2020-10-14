import axios from 'axios'
import * as actionTypes from './actionTypes'
import React from 'react'
import { DJANGO_API_URL, NODEJS_URL } from '../../components/constants'

export const authStart = name => {
    return {
        type: actionTypes.AUTH_START, 
        name: name
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


export const authLogin = (username, email, password) => {
    return dispatch => {
        dispatch(authStart(username))
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            'username': username,
            'email': email, 
            'password': password, 
        })
        .then(res => {
            const token = res.data.key
            localStorage.setItem('token', token)
            return dispatch(authSuccess(token))
        })
        .catch(err => {
            if(err.response){
            const message = `Something went wrong with Login... Status Code : ${err.response.status}`
            dispatch(authFail(message))
            }
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

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart(username))
        username = username.replace(/ /g, "")
        return axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key
            localStorage.setItem('token', token)
            dispatch(authSuccess(token))
            console.log(token)
        })
        .catch(err => {
            const message = `Something went wrong with Signup... Status Code : ${err.response.status}`
            dispatch(authFail(message))
        })  
    }
}

export const updateAvatar = pic => {
    return {
        type: actionTypes.UPDATE_PIC,
        pic: pic
    }
}

export const setAvatar = (avatar) => {
    return dispatch => {
        if(!avatar){
            dispatch(updateAvatar('https://seapebblesimmigration.com/img/avtar/pic3.png'))
        }
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        return axios.post(NODEJS_URL + '/api/users/uploadImage', avatar, config)
        .then(res => {
            console.log(res.data.image)
            dispatch(updateAvatar(`http://localhost:5000/${res.data.image}`))
        })
        .catch(err => console.log(err))
        
    }
}


export const setErrorMessage = error => {
    return {
        type: actionTypes.SET_ERROR,
        error: error
    }
}

export const setFriends = friends => {
    return {
        type: actionTypes.SET_FRIENDS, 
        friends: friends
    }
}

export const getFriends = () => {
    return dispatch => {
        axios.get(DJANGO_API_URL+'/user/all/')
        .then(res => {
            const userProfiles = res.data
            const userProfilesSerialized = []
            var i
            for(i in userProfiles){
                const userProfile = userProfiles[i]
                const name = userProfile.user.username
                const avatar = userProfile.profile_pic
                const userProfileSerialized = {name, avatar}
                userProfilesSerialized.push(userProfileSerialized)
            }
            dispatch(setFriends(userProfilesSerialized))
        })
        .catch(err => {
            console.log('ASS' + err)
            dispatch(setErrorMessage('Cannot fetch other users'))
        })
    }
}


export const addToCart = (title, price, category, condition) => {
    return {
        type: actionTypes.ADD_TO_CART, 
        title: title, 
        price: price, 
        category: category, 
        condition: condition
    }
}

