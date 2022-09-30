import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, About, Four0Four, Category, ProductDetails, Login, Signup, Account, Cart, Checkout} from '../pages'







const Routers = () => {

  return (
    <>
    <Routes>
    <Route path='/' element ={<Home/>} exact/>
    <Route path='/about' element ={<About/>}/>
    <Route path='/men' element ={<Category/>}/>
    <Route path='/women' element ={<Category/>}/>
    <Route path='/product/:id' element ={<ProductDetails/>}/>
    <Route path ='*' element ={<Four0Four/>}/>
    <Route path ='/login' element ={<Login/>}/>
    <Route path='/signup' element = {<Signup/>}/>
    <Route path = '/account' element = {<Account/>}/>
    <Route path = '/cart' element = {<Cart/>}/>
    <Route path = '/checkout' element = {<Checkout/>}/>
    
    </Routes>
    
    
    </>
  )
}

export default Routers