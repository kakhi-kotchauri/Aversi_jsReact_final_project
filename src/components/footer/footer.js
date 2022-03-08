import './footer.css'
import logo from './pictures/logo.png'
import chat from './pictures/chat.png'
import card from './pictures/cards.png'



export function Footer() {


    return (
    <footer className="footer" >
       
       <div className='content-wrapper'>

        <img className='logo' src={logo} alt="logo" />

       <div className='center-text'>

         <div className='colums'>
             <h3 className='colum-h3'>კომპანია</h3>
             <p className='colum-p'>ჩვენს შესახებ</p>
             <p className='colum-p'>სიახლეები</p>
             <p className='colum-p'>აფთიაქები</p>
             <p className='colum-p'>კლინიკები</p>
         </div>

         <div className='colums'>
             <h3 className='colum-h3'>ინფორმაცია</h3>
             <p className='colum-p'>საბონუსე სისტემა</p>
             <p className='colum-p'>მონაცემთა ბაზა</p>
             <p className='colum-p'>ფასების რეესტრი</p>
         </div>

         <div className='colums'>
             <h3 className='colum-h3'>დახმარება</h3>
             <p className='colum-p'>დაბრუნება</p>
             <p className='colum-p'>შეკვეთის გაფორმება</p>
             <p className='colum-p'>შეკვეთის გადახდა</p>
             <p className='colum-p'>მომსახურების წესები</p>
         </div>

       </div>

       <div className='help-wrapper'>
           <img className='help-img' src={chat} alt="chat" />
           <p className='help-p'>ონლაინ დახმარება</p>
       </div>
    
       </div>


     <div className='lower-content-wrapper'>
       <div className='lower-content'>
          <img src={card} alt="cards" />
          <div className='copyright'>© 2020 Aversi, LTD. All rights reserved.</div>
       </div>
     </div>

    </footer>
    )
}