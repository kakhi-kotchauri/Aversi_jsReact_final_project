import './footer.css'
import logo from './pictures/logo.png'
import chat from './pictures/chat.png'
import card from './pictures/cards.png'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'



export function Footer() {


      function lang(language) {
        i18n.changeLanguage(language)
      }

  const {t} = useTranslation()


    return (
    <footer className="footer" >
       
       <div className='content-wrapper'>

        <img className='footer-logo' src={logo} alt="logo" />

       <div className='center-text'>

         <div className='colums'>
             <h3 className='colum-h3'>{t('company')}</h3>
             <p className='colum-p'>{t('about')}</p>
             <p className='colum-p'>{t('news')}</p>
             <p className='colum-p'>{t('pharmacy')}</p>
             <p className='colum-p'>{t('hospital')}</p>
         </div>

         <div className='colums'>
             <h3 className='colum-h3'>{t('info')}</h3>
             <p className='colum-p'>{t('bonus')}</p>
             <p className='colum-p'>{t('database')}</p>
             <p className='colum-p'>{t('price')}</p>
         </div>

         <div className='colums'>
             <h3 className='colum-h3'>{t('help')}</h3>
             <p className='colum-p'>{t('return')}</p>
             <p className='colum-p'>{t('order')}</p>
             <p className='colum-p'>{t('payment')}</p>
             <p className='colum-p'>{t('useragrement')}</p>
         </div>

       </div>

       <div className='help-wrapper'>
           <img className='help-img' src={chat} alt="chat" />
           <p className='help-p'>{t('onlinehelp')}</p>
       </div>
    
       </div>


    <div className='lower-lang-par'>
       <button onClick={() => lang('en')}>en</button>
       <button onClick={() => lang('ka')}>ka</button>
   </div>

     <div className='lower-content-wrapper'>
       <div className='lower-content'>
          <img className='footer-cards' src={card} alt="cards" />
          <div className='copyright'>© 2020 Aversi, LTD. All rights reserved.</div>
       </div>
     </div>

    </footer>
    )
}