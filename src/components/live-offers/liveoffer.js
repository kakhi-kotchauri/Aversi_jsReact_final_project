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
import { Resolution } from '../../hooks/resolution';



export function Liveoffer(props) {

  const [offerdata, setofferdata] = useState([])
  const [res, setres] = useState(Resolution())
  const [pagestatus, setpagestatus] = useState(false)


    
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


  <div className='tt4'>
      <div className='offer-slot-wrapper'>
         

              <Swiper
                slidesPerView={ pagestatus && res > 1150 ? 4 : ( res < 1150 && res > 850 ? 3 : ( res < 855 ? 2 : 2))}
                spaceBetween={1}
                slidesPerGroup={2}
                navigation={true}
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
    </div>

    </section>
    )
}