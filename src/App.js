import './App.css';
import { useState, useEffect, useRef } from 'react';
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
import Itemstatus from './itemstatus';
import Globalcat from './globalcat';
import Favoritecontext from './favoritecontext'
import { Favorite } from './components/favorite-page/favorite';






    function App() {

    const [data, setdata] = useState([])
    const [data2, setdata2] = useState([])
    const [cartitem, setcartitem] = useState([])
    const [favorite, setfavorite] = useState([])
    const [itemstatus, setitemstatus] = useState(true)
    const [alert, setalert] = useState('')
    const [globalcat, setglobalcat] = useState('')
      
    useEffect(() => {

      fetch('https://kakhi-kotchauri.github.io/fakedata.github.io/fakedata.json')
      .then( response => response.json())
      .then(response2 => {
        const finaldata = response2.Products.map((item, index) => ({...item, customid : index}))
        setdata(finaldata)
      })
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


    // console.log(data)




    useEffect(() => {

      if(cartitem.length >= 1 && itemstatus) {
       setalert('დამეტატა კალათაში')
      }

      setitemstatus(true)
    }, [cartitem])
    

    const someref = useRef()
    const someref2 = useRef()

    // console.log(someref.current)

    function tt(e) {

      if(e.target === someref2.current) {
        setalert('')
        
      }
      
    }



      return (

        <Favoritecontext.Provider value= {
          {
            favorite : favorite,
            setfavorite : setfavorite
          }
        }
        >
        <Globalcat.Provider value= {
          {
            globalcat : globalcat,
            setglobalcat : setglobalcat
          }
        }
        >
        <Itemstatus.Provider value= {
          {
            itemstatus : itemstatus,
            setitemstatus : setitemstatus
          }
        }
        >
        <Cartcontext.Provider value= {
          {
            cartitem : cartitem,
            setcartitem : setcartitem
          }
        }
        >

          <div ref={someref} className='app-par'>

          <Header/>
            <Routes>
              <Route path='/' element={ <Home data={data} data2={data2}/> }/>
              <Route path='drugpage' element={  <Drugpage data={data}/> }/>
              <Route path='drugpage-cat' element={  <Drugpage category={globalcat} data={data}/> }/>
              <Route path='about' element={ <About/> }/>
              <Route path='cart' element={ <Cartpage originaldata={data} data={cartitem}/> }/>
              <Route path='favorites' element={ <Favorite data={data}/> }/>
              <Route path='/:index' element={ <Productpage data ={data}/> }/>
            </Routes>
          <Footer/>



          {
            alert !== '' ? <div onClick={(e) => tt(e)} ref={someref2} className='custom-alert'>
              <div onClick={tt} className='alert-content'>
                <p className='alert-title'>{`${cartitem[cartitem.length - 1].title} ${alert}`}</p>
                <button className='alert-button' onClick={() => setalert('')}>გაგრძელება</button>
                <Link  onClick={() => setalert('')}  className='alert-button' to={'cart'}>
                <p>კალათის ნახვა და გადახდა</p>
                </Link>
              </div>
            </div> : null
          }
          </div>

        </Cartcontext.Provider>
        </Itemstatus.Provider>
        </Globalcat.Provider>
        </Favoritecontext.Provider>
      );
    }
    export default App;
