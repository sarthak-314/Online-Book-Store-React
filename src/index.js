import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './store/reducers/auth'
import Redux from 'redux-thunk'
import App from './App'

const store = createStore(rootReducer, applyMiddleware(Redux))

render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
