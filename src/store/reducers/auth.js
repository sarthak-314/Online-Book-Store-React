import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utils'

const initialState = {
    token: null,
    name: 'Anonymous User', 
    error: null, 
    loading: false, 
    pic: "https://66.media.tumblr.com/d82d24956974272dff1f745a004a43bf/tumblr_o51oavbMDx1ugpbmuo3_540.png", 
    friends : [{name: 'Rick Sanchez', avatar: ''}], 
    cart: []
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        name: action.name, 
        loading: true
    })
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    })
}

const updateProfilePic = (state, action) => {
    return updateObject(state, {
        pic: action.pic
    })
}


const setFriends = (state, action) => {
    return updateObject(state, {
        friends: action.friends
    })
}

const addToCart = (state, action) => {
    const title = action.title
    const price = action.price
    const category = action.category
    const condition = action.condition
    const item = {title, price, category, condition}
    const cart = state.cart
    return updateObject(state, {
        cart: [...cart, item]
    })
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action)
        case actionTypes.UPDATE_PIC: return updateProfilePic(state, action)
        case actionTypes.SET_FRIENDS: return setFriends(state, action)
        case actionTypes.ADD_TO_CART: return addToCart(state, action)
        default: return state
    }
}

export default reducer