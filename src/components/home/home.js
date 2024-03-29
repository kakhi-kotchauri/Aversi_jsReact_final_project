import './home.css'
import { Liveproduct } from '../live-product/liveproduct'
import { Liveoffer } from '../live-offers/liveoffer'
import { useNavigate } from 'react-router-dom'
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
import smallphone from './pictures/s22-front.png'
import play from './pictures/play.png'
import apple from './pictures/apple.png'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import Globalcat from '../../globalcat'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "..//.././styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Resolution } from '../../hooks/resolution'





export function Home(props) {


const {setglobalcat} = props.globalcat


  const [pagestatus, setpagestatus] = useState(false)
  const [res, setres] = useState(Resolution())

  useEffect(() => {
    setpagestatus(true)
    return () => {
    setpagestatus(false)
    }
  }, [])

  const test = Resolution()


  useEffect(() => {

      setres(window.innerWidth)

  }, [test])


    let nav = useNavigate();

    function goroutecat(route, cat) {
      setglobalcat(cat)
      nav(`/${route}`);
    }




    return (
    <div>

      <div className='banner-wrapper'>
          <Swiper 
            loop={true}
            pagination={{
            clickable: true,
            }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
          >

              <SwiperSlide>
            <div className='banner'></div>
            <h1 className='ban-text'>შექმენით თქვენი პირადი სააფთიაქო თარო</h1>
            <a target='_blank' href="https://www.aversi.ge/">
            <button className='button'>გაიგეთ მეტი..</button>
            </a>
           </SwiperSlide>

           <SwiperSlide>
            <div className='banner2'></div>
            <h1 className='ban-text'>ავერსში გულების აქცია გრძელდება</h1>
            <a target='_blank' href="https://www.aversi.ge/">
            <button className='button'>ნახვა</button>
            </a>
           </SwiperSlide>

        </Swiper>
      </div>


     <div className='slot-wrapper-par'>
      <div className='slot-wrapper'>

      <a className='slot-a' target='_blank' href="https://play.google.com/store/apps/details?id=com.leavingstone.aversi&hl=en&gl=US">
        <div className='slot'>
         <img className='slot-img' src={cart} alt="cart" />
         <p className='p1'>შეუკვეთე ონლაინ</p>
         <p className='p2'>ჩამოტვირთეთ ავერსის მობილური აპლიკაცია ან ისარგებლეთ გლოვოს მიტანის სერვისით</p>
        </div> 
        </a>

         
      <a className='slot-a' target='_blank' href="https://www.aversi.ge/">
        <div className='slot'>
         <img className='slot-img' src={calendar} alt="cart" />
         <p className='p1'>ექიმთან ჩაწერა</p>
         <p className='p3'>ნუ გადადებ ექიმთან ვიზიტს შორეულ მომავალზე, ჩაეწერე ონლაინ დღესვე</p>
        </div> 
      </a> 

     <a className='slot-a' target='_blank' href="https://www.aversi.ge/">
        <div className='slot'>
         <img className='slot-img' src={doctor} alt="cart" />
         <p className='p1'>მტრედი ბარათი</p>
         <p className='p4'>დააგროვე ბონუსები და ამავე დროს შეიძინე პროდუქცია ფასდაკლებით</p>
        </div> 
      </a> 

      </div>
      </div>


   <Liveproduct data={props.data}/>
   <Liveoffer data={props.data2}/>


      <div className='catalog-title'>პროდუქციის კატალოგი</div>
      <div className='catalog-par'>
      <div className='catalog'>


        <div onClick={() => goroutecat('drugpage-cat', 'მედიკამენტი')} className='catalog-slot'>
            <img className='catalog-img' src={pill} alt="pill" />
            <p className='catalog-p'>მედიკამენტები</p>
        </div>  

        <div onClick={() => goroutecat('drugpage-cat', 'კოსმეტიკა')} className='catalog-slot'>
            <img className='catalog-img' src={cosmetic} alt="pill" />
            <p className='catalog-p'>კოსმეტიკა</p>
        </div>  

        <div onClick={() => goroutecat('drugpage-cat', 'ბავშვები')} className='catalog-slot'>
            <img className='catalog-img' src={feeder} alt="pill" />
            <p className='catalog-p'>საბავშვო კვება</p>
        </div>     

        <div onClick={() => goroutecat('drugpage-cat', 'თმის მოვლა')} className='catalog-slot'>
            <img className='catalog-img' src={stick} alt="pill" />
            <p className='catalog-p'>თმის მოვლა</p>
        </div>     
 

        <div onClick={() => goroutecat('drugpage-cat', 'ჰიგიენა')} className='catalog-slot'>
            <img className='catalog-img' src={sanit} alt="pill" />
            <p className='catalog-p'>ჰიგიენა</p>
        </div>    

        <div onClick={() => goroutecat('drugpage-cat', 'სამედიცინო მოწყობილობები')} className='catalog-slot'>
            <img className='catalog-img' src={tray} alt="pill" />
            <p className='catalog-p'>მოწყობილობები</p>
        </div>     

        <div onClick={() => goroutecat('drugpage-cat', 'პირველადი დახმარება')} className='catalog-slot'>
            <img className='catalog-img' src={bag} alt="pill" />
            <p className='catalog-p'>პირველადი დახმარება</p>
        </div>     

        
        <div onClick={() => goroutecat('drugpage-cat', 'ოპტიკა')} className='catalog-slot'>
            <img className='catalog-img' src={eye} alt="pill" />
            <p className='catalog-p'>ოპტიკა</p>
        </div>    

        
        <div onClick={() => goroutecat('drugpage-cat', 'ორთოპედია')} className='catalog-slot'>
            <img className='catalog-img' src={salad} alt="pill" />
            <p className='catalog-p'>ორთოპედია</p>
        </div>    

        <div onClick={() => goroutecat('drugpage-cat', '')} className='catalog-slot'>
            <img className='catalog-img' src={group} alt="pill" />
            <p className='catalog-p'>სხვა</p>
        </div>    

      </div>
    </div>


    <div className='ad'>
       <img className='phone' src={res > 1000 ? phone : smallphone} alt="phone" />
       <div className='left-text'>
           <h2 className='left-text-h2'>ჩამოტვირთე ავერსის მობილური აპლიკაცია</h2>
           <p className='left-text-p'>შეიძინე პროდუქცია სახლიდან გაუსვლელად</p>
           <p className='left-text-p'>გაეცანი სრული პროდუქციის კატალოგს</p>
           <p className='left-text-p'>შეამოწმე ქულები მტრედი ბარათზე</p>
           <p className='left-text-p'>იხილე აფთიაქებისა და კლინიკების მისამართები</p>
           <div className='store-par'>

            <a target='_blank' href="https://play.google.com/store/apps/details?id=com.leavingstone.aversi&hl=en&gl=US">
             <img className='store' src={play} alt="play" />
             </a>

             <a target='_blank' href="https://apps.apple.com/us/app/aversi/id1195068578">
             <img className='store' src={apple} alt="apple" />
             </a>

           </div>
       </div>
    </div> 

    
    </div>

    )
}