import './header.css'
import logo from './images/aversi-ltd.svg'
import search from './images/search.png'
import hearth from './images/hearth.png'
import person from './images/person.png'
import cart from './images/shopping-cart.png'
import burger from './images/burger.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import Cartcontext from '../../cartcontext';





export function Header(props) {

  let nav = useNavigate();

  console.log(props.currentuser)

  const {signin, setsignin} = props.signin
  

const {cartitem, setcartitem} = useContext(Cartcontext)
const {searchvalue, setsearchvalue} = props.valuesend
// const [searchinput, setsearchinput] = useState('')

// console.log(searchinput)

    return (
        <header>
        
        <div className='line-wrapper'>

          <Link to='/'>
          <img className='logo' src={logo} alt="logo" />
          </Link>

          <div className='search-wrap'>
          <input value={searchvalue}  onChange={(e) => setsearchvalue(e.target.value)} className='input' type="text" placeholder='წამლის ძებნა' />
          <img className='search' src={search} alt="search" />
          </div>
          <div className='icon-wrap'>
           
            {
              props.currentuser ?
               <div className='userprofile' style={{backgroundColor : props.currentuser.color}}> 
               
               {`${props.currentuser.firstname[0]} . ${props.currentuser.lastname[0]}`} 
               
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
           <Link to='/'>
              <li>
                <div className='header-burger-par'>
                  <img className='burger' src={burger} alt="burger" />
                  <p className='burger-text'>მთავარი</p>
                </div> 
              </li>
              </Link>
              
              <li>
                 <Link className='header-text' to='drugpage'>წამლები</Link>
               </li> 

               <li>
                 <Link className='header-text' to='#'>კატალოგი</Link>
              </li> 

               <li>
                 <Link className='header-text' to='about'>ჩვენს შესახებ</Link>
              </li> 

            </ul>

        </nav>

        </header>
    )

}