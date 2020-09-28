import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import BookStore from './components/FrontPage/BookStore'
import SignForm from './components/SignForm/SignForm'
import NavBar from './components/FrontPage/NavBar'
import UploadBook from './components/UploadBook/UploadBook'
import ProductPage from './components/ProductPage/ProductPage'
import PaymentPage from './components/PaymentPage/PaymentPage'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
  	<Suspense fallback={(<div> Loading </div>)}>
    <div class='book-store'>
    	<NavBar/>
    </div>
    <div class='book-store'>
    <Switch>
	   <Route exact path='/' component={BookStore} />
	   <Route exact path='/upload' component={UploadBook} /> 
     <Route exact path='/signup' component={SignForm}/>
     <Route path='/bookad/:slug' component={ProductPage}/>
     <Route path='/checkout/' component={PaymentPage}/>
    </Switch>
    </div>
    </Suspense>
  );
}
export default App;	
