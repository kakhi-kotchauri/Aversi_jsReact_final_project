import './header.css'
import logo from './images/aversi-ltd.svg'
import search from './images/search.png'
import hearth from './images/hearth.png'
import person from './images/person.png'
import cart from './images/shopping-cart.png'
import burger from './images/burger.png'
import { Link } from 'react-router-dom'





export function Header() {
  
    

    return (
        <header>
        
        <div className='line-wrapper'>

          <Link to='/'>
          <img className='logo' src={logo} alt="logo" />
          </Link>

          <div className='search-wrap'>
          <input className='input' type="text" placeholder='წამლის ძებნა' />
          <img className='search' src={search} alt="search" />
          </div>
          <div className='icon-wrap'>
              <img className='icons' src={hearth} alt="hearth" />
              <img className='icons' src={person} alt="person" />
              <img className='icons' src={cart} alt="cart" />
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