import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import PageNotFound from './components/PageNotFound';


class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component ={ProductList}/>
        <Route path="/details" component = {ProductDetail}/>
        <Route path="/cart" component = {Cart}/>
       
        <Route  component = {PageNotFound}/>
        
      </Switch>   
      </>
    );
  }
}

export default App;
