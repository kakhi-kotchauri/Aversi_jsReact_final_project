import './header.css'
import logo from './images/aversi-ltd.svg'
import search from './images/search.png'
import hearth from './images/hearth.png'
import person from './images/person.png'
import cart from './images/shopping-cart.png'
import burger from './images/burger.png'





export function Header() {
    

    return (
        <header>
        
        <div className='line-wrapper'>
          <img className='logo' src={logo} alt="logo" />
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

        <div className='line2-wrapper'>
            <div className='line2-par'>
            <div className='drop-par'>
            <div className='drop'>
              <img className='burger' src={burger} alt="burger" />
              <h1 className='burger-text'>კატალოგი</h1>
            </div>
            </div>    
            <h1 className='lowtext'>აფთიაქები</h1>
            <h1 className='lowtext'>კლინიკები</h1>
            <h1 className='lowtext'>ჩვენს შესახებ</h1>
            </div>
        </div>
        </header>
    )

}