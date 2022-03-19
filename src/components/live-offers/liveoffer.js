import './liveoffer.css'
import { useState, useEffect } from 'react'
import img1 from './pictures/offer1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "..//.././styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";



export function Liveoffer(props) {

  const [offerdata, setofferdata] = useState([])

    
    useEffect(() => {

      
        function promise(data) {
            return new Promise(resolve => {
               resolve(data)
            })
         }
      
         async function getdata() {
            await promise(props.data)
            .then(data => {
               setofferdata(data)
            })
        }
    
        getdata()
    
        }, [props.data])






    return (
    <section className='live-offer-par'>


        
        <div className='offer-head-wrapper'>
                  <p className='offer-head-p'>მიმდინარე აქციები</p>
                  {/* <div className='offer-arrow-wrapper'>
                     <img onClick={moveleft} className='offer-arrows' src={left} alt="left" /> 
                     <p>{`${status} / ${Math.ceil(props.data.length / step)}`}</p>
                     <img onClick={moveright} className='offer-arrows' src={right} alt="right" /> 
                  </div> */}
              </div>



      <div className='offer-slot-wrapper'>
         

              <Swiper
                slidesPerView={4}
                spaceBetween={1}
                slidesPerGroup={4}
                navigation={true}
                pagination={{
                 clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >

               
          {
              offerdata ? 
              offerdata.map((item, index) => {
                 return (
               <SwiperSlide key={index}>

            
                    <div className='offer-slot'>
                    <div className={`offerfade0`}></div>
                    <div className='offer-image-wrapper'>
                    <img className='offer-image' src={item.src} alt="offer-image" />
                    </div>
                    <div className='offer-text-wrapper'>
                        <div className='offer-text-par'>
                      <p className='offer-title'>{item.date}</p>
                      <p className='offer-description'>{item.description}</p>
                      </div>
                   </div>
                </div>
          </SwiperSlide>


                 )
              })
              : null

          }
        </Swiper>
             
       </div>

    </section>
    )
}