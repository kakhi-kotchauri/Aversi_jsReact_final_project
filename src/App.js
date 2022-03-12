import './App.css';
import { useState, useEffect } from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Pagehead } from './components/product-head/pagehead';
import { Drugpage } from './components/drug-page/drugpage';
import { Productpage } from './components/product-page/productpage';
import { About } from './components/about/about';
import { Routes, Route, Link } from 'react-router-dom';
import Cartcontext from './cartcontext';
import { Cartpage } from './components/cart-page/cartpage';





function App() {

const [data, setdata] = useState([])
const [data2, setdata2] = useState([])
const [cartitem, setcartitem] = useState([])
  
useEffect(() => {

  fetch('https://kakhi-kotchauri.github.io/fakedata.github.io/fakedata.json')
  .then( response => response.json())
  .then(response2 => setdata(response2.Products))
  .catch((error) => {
    console.log(error)
  })

  fetch('https://kakhi-kotchauri.github.io/fakedata.github.io//offers.json')
  .then( response => response.json())
  .then(response2 => setdata2(response2.offers))
  .catch((error) => {
    console.log(error)
  })

}, [])


console.log(cartitem)



  return (
    <Cartcontext.Provider value= {
       {
         cartitem : cartitem,
         setcartitem : setcartitem
       }
    }
    >
      <div className='app-par'>
      <Header/>
        <Routes>
          <Route path='/' element={ <Home data={data} data2={data2}/> }/>
          <Route path='drugpage' element={  <Drugpage data={data}/> }/>
          <Route path='about' element={ <About/> }/>
          <Route path='cart' element={ <Cartpage data={cartitem}/> }/>
          <Route path='/:index' element={ <Productpage data ={data}/> }/>
        </Routes>
      <Footer/>
      </div>
    </Cartcontext.Provider>
  );
}
export default App;
