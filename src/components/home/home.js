import './home.css'
import { Liveproduct } from '../live-product/liveproduct'
import { Liveoffer } from '../live-offers/liveoffer'
import cart from './pictures/cart.png'
import calendar from './pictures/calendar.png'
import doctor from './pictures/doctor.png'
import pill from './pictures/pill.png'
import eye from './pictures/eye.png'
import stick from './pictures/stick.png'
import cosmetic from './pictures/cosmetic.png'
import feeder from './pictures/feeder.png'
import sanit from './pictures/sanit.png'
import group from './pictures/group.png'
import bag from './pictures/bag.png'
import tray from './pictures/tray.png'
import salad from './pictures/salad.png'
import phone from './pictures/s22.png'
import play from './pictures/play.png'
import apple from './pictures/apple.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Globalcat from '../../globalcat'





export function Home(props) {


const {globalcat, setglobalcat} = useContext(Globalcat)




    return (
    <div>

      <div className='banner-wrapper'>
        <div className='banner'></div>
        <h1 className='ban-text'>შექმენით თქვენი პირადი სააფთიაქო თარო</h1>
        <button className='button'>გაიგეთ მეტი..</button>
      </div>



     <div className='slot-wrapper-par'>
      <div className='slot-wrapper'>

        <div className='slot'>
         <img className='slot-img' src={cart} alt="cart" />
         <p className='p1'>შეუკვეთე ონლაინ</p>
         <p className='p2'>ჩამოტვირთეთ ავერსის მობილური აპლიკაცია ან ისარგებლეთ გლოვოს მიტანის სერვისით</p>
        </div>  

        <div className='slot'>
         <img className='slot-img' src={calendar} alt="cart" />
         <p className='p1'>ექიმთან ჩაწერა</p>
         <p className='p3'>ნუ გადადებ ექიმთან ვიზიტს შორეულ მომავალზე, ჩაეწერე ონლაინ დღესვე</p>
        </div>  

        <div className='slot'>
         <img className='slot-img' src={doctor} alt="cart" />
         <p className='p1'>მტრედი ბარათი</p>
         <p className='p4'>დააგროვე ბონუსები და ამავე დროს შეიძინე პროდუქცია ფასდაკლებით</p>
        </div>  

      </div>
      </div>


   <Liveproduct data={props.data}/>
   <Liveoffer data={props.data2}/>


      <div className='catalog-title'>პროდუქციის კატალოგი</div>
      <div className='catalog-par'>
      <div className='catalog'>


      <Link to={`/${'drugpage-cat'}`}>
        <div onClick={() => setglobalcat('ჰიგიენა')} className='catalog-slot'>
            <img className='catalog-img' src={pill} alt="pill" />
            <p className='catalog-p'>წამლები</p>
        </div>  
      </Link>   

      <Link to={`/${'drugpage-cat'}`}>
        <div onClick={() => setglobalcat('კოსმეტიკა')} className='catalog-slot'>
            <img className='catalog-img' src={cosmetic} alt="pill" />
            <p className='catalog-p'>კოსმეტიკა</p>
        </div>  
        </Link>   

        <div className='catalog-slot'>
            <img className='catalog-img' src={feeder} alt="pill" />
            <p className='catalog-p'>საბავშვო კვება</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={stick} alt="pill" />
            <p className='catalog-p'>ორთოპედია</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={eye} alt="pill" />
            <p className='catalog-p'>ოპტიკა</p>
        </div>  

      <Link to={`/${'drugpage-cat'}`}>
        <div onClick={() => setglobalcat('ჰიგიენა')} className='catalog-slot'>
            <img className='catalog-img' src={sanit} alt="pill" />
            <p className='catalog-p'>ჰიგიენა</p>
        </div>  
        </Link>   

        <div className='catalog-slot'>
            <img className='catalog-img' src={tray} alt="pill" />
            <p className='catalog-p'>დიაგნოსტიკა</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={bag} alt="pill" />
            <p className='catalog-p'>პირველადი დახმარება</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={salad} alt="pill" />
            <p className='catalog-p'>ბალახეული</p>
        </div>     

        <div className='catalog-slot'>
            <img className='catalog-img' src={group} alt="pill" />
            <p className='catalog-p'>სხვა</p>
        </div>    

      </div>
    </div>


    <div className='ad'>
       <img className='phone' src={phone} alt="phone" />
       <div className='left-text'>
           <h2 className='left-text-h2'>ჩამოტვირთე ავერსის მობილური აპლიკაცია</h2>
           <p className='left-text-p'>შეიძინე პროდუქცია სახლიდან გაუსვლელად</p>
           <p className='left-text-p'>გაეცანი სრული პროდუქციის კატალოგს</p>
           <p className='left-text-p'>შეამოწმე ქულები მტრედი ბარათზე</p>
           <p className='left-text-p'>იხილე აფთიაქებისა და კლინიკების მისამართები</p>
           <div className='store-par'>
               <img className='store' src={apple} alt="apple" />
               <img className='store' src={play} alt="play" />
           </div>
       </div>
    </div>

    
    </div>

    )
}