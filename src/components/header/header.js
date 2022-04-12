import './header.css'
import logo from './images/aversi-ltd.svg'
import search from './images/search.png'
import hearth from './images/hearth.png'
import person from './images/person.png'
import cart from './images/shopping-cart.png'
import home from './images/home.png'
import burger from './images/burger.png'
import logo2 from './images/logo2.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useRef, useState } from 'react';
import Cartcontext from '../../cartcontext';
import { Resolution } from '../../hooks/resolution'
import { useTranslation } from 'react-i18next'




export function Header(props) {

  let nav = useNavigate();

  const {t} = useTranslation()

  const [togleburger, settogleburger] = useState(false)

   
  const {setcurrentuser} = props.setcurrentuser
  const {setfavorite, favorite} = props.favorite
  


  const {signin, setsignin} = props.signin

  const [toglemenu, settoglemenu] = useState(false)
  const [togleprofile, settogleprofile] = useState(false)
  

const {cartitem, setcartitem} = useContext(Cartcontext)
const {searchvalue, setsearchvalue} = props.valuesend

const menuref = useRef()

  function closemenu(e) {
      settoglemenu(!toglemenu)
  }


  function out() {
    settogleprofile(false)
    setcurrentuser()
    settoglemenu(!toglemenu)
    favorite.forEach(element => {
      console.log('clean')
      element.hearted = false
    });
    setfavorite([])
    setcartitem([])
  }

  function inprofile() {

    nav('/profile-page')
    settoglemenu(!toglemenu)
    
  }

  // console.log(favorite)


    return (
        <header>


         {
           Resolution() > 720 ?
          <div className='header-main' >
        
        <div  className='line-wrapper'>

         {
            toglemenu ? 
            <div onClick={() => closemenu()} ref={menuref} className='toggleof'></div>
          : null
          }

        
          <img onClick={() => nav('/')} className='logo' src={logo} alt="logo" />
        

          <div className='search-wrap'>
          <input value={searchvalue}  onChange={(e) => setsearchvalue(e.target.value)} className='input' type="text" placeholder='წამლის ძებნა' />
          <img className='search' src={search} alt="search" />
          </div>

          
          <div className='icon-wrap'>
           
            {
              props.currentuser ?
              <div className='userprofile-icon-par'>

               <div onClick={ () => settoglemenu(!toglemenu)} className='userprofile' style={{backgroundColor : props.currentuser.color}}> 
               { props.currentuser.firstname.slice(0,2)} 
               </div>


               {
                 toglemenu ? 
                 <div className='userprofile-buttons'>
                  <button onClick={() => inprofile()} className='button-prof'>{t('profile')}</button>
                  <button onClick={() => out()} className='button-prof'>{t('logout')}</button>
                </div>
                : null
               }

          
               </div>
               :
               <img onClick={() => setsignin(!signin)} className='icons' src={person} alt="person" />
            }

              <img onClick={() => nav('/favorites')} className='icons' src={hearth} alt="hearth" />

            
                <div onClick={() => nav('/cart')} className='header-cart-wrapper'>
              <img className='icons' src={cart} alt="cart" />

              {
                cartitem.length >= 1 ? 
                <div className='header-cart-number'>{cartitem.length}</div> 
                : null
              }
              
              </div>
  
          </div>
        </div>

        <nav className='header-line2'>

           <ul className='header-text-par'>
          
              <li onClick={() => nav('/')} >
                <div className='header-burger-par'>
                  <img className='burger' src={home} alt="burger" />
                  <p className='burger-text'>{t('home')}</p>
                </div> 
              </li>
            
              <li>
                 <p onClick={() => nav('drugpage')}  className='header-text' to='drugpage'>{t('drugs')}</p>
               </li> 

               <li>
                 <p onClick={() => nav('pharmacy')} className='header-text'>{t('pharmacy')}</p>
              </li> 

              <li>
                 <p onClick={() => nav('hospitals')} className='header-text'>{t('hospital')}</p>
              </li> 

               <li>
                 <p onClick={() => nav('about')}  className='header-text' to='about'>{t('about')}</p>
              </li> 

            </ul>

        </nav>

        </div>
        : null
    }

    {
      Resolution() < 720 ?
      <div className='header-mobile-par'>
        
        <div className='header-mobile' >
         <div className='header-burger-content'>
          <img onClick={() => settogleburger(!togleburger)} className='header2-burger' src={burger} alt="burger" />

        </div>
           
           <div className='search-wrap'>
          <input value={searchvalue}  onChange={(e) => setsearchvalue(e.target.value)} className='input' type="text" placeholder='წამლის ძებნა' />
          <img className='search' src={search} alt="search" />
          </div>
        </div>

        {
          togleburger ?
           <nav className='header2-nav'>
             <ul className='header2-ul'>

              <li onClick={() => nav('/')} className='header2-li'>
                <p  className='header2-p'>{t('home')}</p>
              </li>

              <li onClick={() => nav('drugpage')} className='header2-li'>
                <p  className='header2-p'>{t('drugs')}</p>
              </li>

              <li onClick={() => nav('pharmacy')}  className='header2-li'>
                <p className='header2-p'>{t('pharmacy')}</p>
              </li>

              <li onClick={() => nav('hospitals')} className='header2-li'>
                <p className='header2-p'>{t('hospital')}</p>
              </li>

              <li onClick={() => nav('about')} className='header2-li'>
                <p  className='header2-p noborder'>{t('about')}</p>
              </li>

              <li onClick={() => nav('favorites')} className='header2-li'>
                <p className='header2-p noborder'>ფავორიტები</p>
              </li>

              <li onClick={() => nav('cart')} className='header2-li'>
                <p  className='header2-p noborder'>კალათა</p>
              </li>

              {
                props.currentuser ?
                <div className='header-user-par'>

                <li onClick={() => settogleprofile(!togleprofile)} className='header2-user noborder'>
                  <div className='header2-circle' 
                  style={{backgroundColor : props.currentuser.color}}
                  >
                   {props.currentuser.firstname.slice(0,1).toUpperCase()}
                  </div>
                  <p className='header2-profiletitle'>{props.currentuser.firstname} {props.currentuser.lastname}</p>
               </li>


               {
                 togleprofile ?
                  <div className='profileparam-par'>
                  <li onClick={() => inprofile()} className='header2-profileparam'>
                      <p className='profileparam-text'>პროფილი</p>
                  </li> 
    
                  <li onClick={() => out()} className='header2-profileparam'>
                    <p className='profileparam-text'>გასვლა</p>
                  </li> 
                 </div>
                 : null
               }
             
           
               </div>
                : 
                <li className='header2-li'>
                <p onClick={() => setsignin(!signin)} className='header2-p noborder'>ავტორიზაცია</p>
               </li>
              }

             </ul>
           </nav>
          : null
        }

        </div>
      : null
    }
        
        </header>
    )

}