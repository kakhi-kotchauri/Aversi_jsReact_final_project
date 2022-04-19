import './liveproduct.css'
import { useState, useEffect } from "react"
import right from './pictures/arrow-right.png'
import left from './pictures/arrow-left.png'
import { Productslot } from '../product-slot/productslot'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Cartcontext from '../../cartcontext'
import Favoritecontext from '../../favoritecontext'
import star from './pictures/star.png'
import graystar from './pictures/gray-star.png'
import hearth from './pictures/hearth.png'
import redhearth from './pictures/redhearth.png'
import { Pagination, Navigation } from "swiper";
import { Resolution } from '../../hooks/resolution'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "..//.././styles.css";







export function Liveproduct(props) {

    const {cartitem, setcartitem} = useContext(Cartcontext)
    const {favorite, setfavorite} = useContext(Favoritecontext)
    const [productarr, setproductarr] = useState([])
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

    
    // console.log(res)
    // console.log(window.innerWidth)


    useEffect(() => {

      
    function promise(data) {
        return new Promise(resolve => {
           resolve(data)
        })
     }
  
     async function getdata() {
        await promise(props.data)
        .then(data => {
              if(data.length > 0) {
               let best = data.filter(item => item.rating.length >= 4)
               setproductarr(best)     
              }
        })
    }

    getdata()

    }, [props.data])



    // console.log(cartitem)



    function addtocart(id) {
        const find = props.data.find(element => element.customid === id)
        const findcart = cartitem.find(element => element.customid === id)
        
        if(!findcart) {
            find['time'] = Date.now()  
            find['productcount'] = 1 
            const newfind = { ...find } 
            setcartitem([...cartitem, newfind].sort(function (a, b) {return b.time - a.time;}))
            console.log('ssss')
         } else {
           console.log('dam')
           setcartitem([...cartitem].sort(function (a, b) {return b.time - a.time;}))
         }
    }




    
        
    function hearting(id) {
        console.log('test')
    const removeitem = favorite.filter(item => item.customid !== id)
    const find = props.data.find(element => element.customid === id)
    const replace = props.data.filter(element => element.customid !== id)
    if(find['hearted'] === true) {
        find['hearted'] = false
        setfavorite(removeitem.sort(function (a, b) {return b.timeheart - a.timeheart;}))
    } else {
        find['hearted'] = true
        find['timeheart'] = Date.now()  
        setfavorite([...favorite, find].sort(function (a, b) {return b.timeheart - a.timeheart;}))
    }
    // setdrugpagedata([...replace, find].sort(function (a, b) {return a.id - b.id;})) 
    }




    // console.log(Resolution())



    return (
        <section className='live-product-par'>

        <div className='product-head-wrapper'>
                  <p className='product-head-p'>ლიდერები გაყიდვაში</p>
              </div>


              <div className='liveproduct-par'>
              
    
          <div className='live-product'>

        {/* {
            console.log(age < 17 ? "You cannot drive." : ( age == 17 ? "Go to driving school." : "You can drive."));
        } */}
              
          <Swiper
                slidesPerView={ pagestatus && res > 1150 ? 4 : ( res < 1150 && res > 850 ? 3 : ( res < 855 ? 2 : 2))}
                spaceBetween={1}
                slidesPerGroup={2}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
           
            {
                productarr? 
                productarr.map((item, index) => {
                    return(

                <SwiperSlide key={index}>  
    
                    <div className='liveproduct-slot-par'>
                        <Link to={`/${item.customid}`}>
                        <Productslot data={props.data} key={index} item={item}/> 
                        </Link>

                        <div className='price-wrapper'>
                        <p className='price'>{item.price} ლარი</p> 
                        <button onClick={() => addtocart(item.customid)} className='buy'>ყიდვა</button>
                        </div>

                        <div className='rating-par'>
                          <div className='rating'>
                          <div className='star-wrapper'>

                            <div className='graystar-wrapper'>
                            <img className='graystar' src={graystar} alt="graystar" />
                            <img className='graystar' src={graystar} alt="graystar" />
                            <img className='graystar' src={graystar} alt="graystar" />
                            <img className='graystar' src={graystar} alt="graystar" />
                            <img className='graystar' src={graystar} alt="graystar" />
                            </div>

                        <div className='stars'>
                            {item.rating.map((item2, index) => {
                                return (                 
                                <img key={index}  className='star' src={star} alt="star" />
                                )
                            } )}
                        </div>

                        </div>

                         <img 
                         onClick={() => hearting(item.customid)} 
                         className='hearth' 
                         src={item.hearted ? redhearth : hearth} alt="hearth"
                          />
                          
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