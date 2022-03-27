import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Pagehead } from './components/product-head/pagehead';
import { Drugpage } from './components/drug-page/drugpage';
import { Productpage } from './components/product-page/productpage';
import { About } from './components/about/about';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Cartcontext from './cartcontext';
import { Cartpage } from './components/cart-page/cartpage';
import Itemstatus from './itemstatus';
import Globalcat from './globalcat';
import Favoritecontext from './favoritecontext'
import { Favorite } from './components/favorite-page/favorite';
import { Search } from './components/search-page/search';
import { Buyed } from './buyed-page/buyed';








    function App() {

    const [data, setdata] = useState([])
    const [data2, setdata2] = useState([])
    const [cartitem, setcartitem] = useState([])
    const [favorite, setfavorite] = useState([])
    const [itemstatus, setitemstatus] = useState(true)
    const [alert, setalert] = useState('')
    const [globalcat, setglobalcat] = useState('')
    const [totalprice, settotalprice] = useState(0)
    const [totalitems, settotalitems] = useState(0)
    const [registerdis, setregisterdis] = useState(false)


    const [regname, setregname] = useState('')
    const [reglastname, setreglastname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [users, setusers] = useState([])


    const someref = useRef()
    const someref2 = useRef()
    const regref = useRef()

    const nameref =useRef()
    const lastnameref =useRef()
    const phoneref =useRef()
    const emailref =useRef()
    const passwordref =useRef()
    const confirmpasswordref =useRef()





    function register(e) {

      e.preventDefault()

      if(regname && reglastname && phone && email && password && confirmpassword && password === confirmpassword) {

        const userdata = {
          id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
          firstname : regname,
          lastname : reglastname,
          email : email,
          phone : phone,
          password : password,
          password2 : confirmpassword
        }
    
        setusers([...users, userdata])

      }

      if( password && confirmpassword && password !== confirmpassword) {
        passwordref.current.style.borderColor = 'red'
        passwordref.current.placeholder = 'პაროლები არ მეთხვევა ერთმანეთს'
        setpassword('')
        confirmpasswordref.current.style.borderColor = 'red'
        confirmpasswordref.current.placeholder = 'პაროლები არ მეთხვევა ერთმანეთს'
        setconfirmpassword('')
      }
      
    }


    console.log(users)
    


    
    const registerdisp = {
      reg : registerdis,
      setreg : setregisterdis
    }
      


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
    


    // console.log(someref.current)

    function tt(e) {

      if(e.target === someref2.current) {
        setalert('')
        
      }
      
    }


    function outside(e) {

      if(e.target === regref.current) {
        
        setregisterdis(!registerdis)
        
      }
      
    }


    


    let nav = useNavigate();


    const [searchvalue, setsearchvalue] = useState('')

    const searchvaluedata = {
      searchvalue: searchvalue,
      setsearchvalue : setsearchvalue
    }


    useEffect(() => {
        
      if(searchvalue) {
        nav('/search')
      } 

    }, [searchvalue])
    

    // console.log(totalitems)


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

          <Header registerdisp={registerdisp} valuesend={searchvaluedata}/>
            <Routes>
              <Route path='/' element={ <Home data={data} data2={data2}/> }/>
              <Route path='drugpage' element={  <Drugpage data={data}/> }/>
              <Route path='drugpage-cat' element={ <Drugpage  category={globalcat} data={data}/> }/>
              <Route path='about' element={ <About/> }/>
              <Route path='cart' element={ <Cartpage  totalitems={{totalitems:settotalitems}}total={{value:settotalprice}} originaldata={data} data={cartitem}/> }/>
              <Route path='favorites' element={ <Favorite data={data}/> }/>
              <Route path='search' element={ <Search data={data} test={searchvaluedata} value={searchvalue}/> }/>
              <Route path='buyed' element={ <Buyed totalitems={totalitems  } price={totalprice}/> }/>
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




          {
            registerdis ? <form onSubmit={(e) => register(e)}>
              <div ref={regref} onClick={(e) => outside(e)} className='register-par'>
            
              <div className='register-content'>

                <div className='register-title-par'>
                  <p className='register-title'>რეგისტრაცია</p>
                </div>
             
             <div className='register-name-par'>
               <input ref={nameref} value={regname} 
               className='register-name-input'
               onChange={(e) => setregname(e.target.value)}
               type="text" placeholder='სახელი' />

               <input ref={lastnameref} value={reglastname}
                className='register-name-input' 
                onChange={(e) => setreglastname(e.target.value)}
                type="text" placeholder='გვარი' />
             </div>

             <input ref={phoneref} value={phone}
              className='register-inputs'
              onChange={(e) => setphone(e.target.value)} 
              placeholder='ტელეფონი' type="number" />

             <input ref={emailref} value={email}
              className='register-inputs'
              onChange={(e) => setemail(e.target.value)}
              placeholder='ელფოსტა' type="text" />

             <input ref={passwordref} value={password}
              className='register-inputs'
              onChange={(e) => setpassword(e.target.value)}
              placeholder='პაროლი' type="password" />

             <input ref={confirmpasswordref} value={confirmpassword} 
             className='register-inputs'
             onChange={(e) => setconfirmpassword(e.target.value)} 
             placeholder='გაიმეორეთ პაროლი' type="password" />

             <button type='submit' className='register-button'>რეგისტრაცია</button>

             </div>
                  
            </div> 
            </form> : null
          }

          </div>

        </Cartcontext.Provider>
        </Itemstatus.Provider>
        </Globalcat.Provider>
        </Favoritecontext.Provider>
      );
    }
    export default App;
