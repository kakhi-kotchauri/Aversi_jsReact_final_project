import './productpage.css'
import { Pagehead } from "../product-head/pagehead";
import testimg from './pictures/testpic.png'
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import Cartcontext from '../../cartcontext';
import white from './pictures/white.png'
import gray from './pictures/gray.png'
import Favoritecontext from '../../favoritecontext';
import { Resolution } from '../../hooks/resolution';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "..//.././styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";




export function Productpage(props) {

let params = useParams()
const productdata = props.data.find(item => item.customid === parseInt(params.index))
const {favorite, setfavorite} = useContext(Favoritecontext)
const {cartitem, setcartitem} = useContext(Cartcontext)

const [pagestatus, setpagestatus] = useState(false)
const [displayimg, setdisplayimg] = useState(false)
const [display, setdisplay] = useState()
const [res, setres] = useState(Resolution())

const displayref = useRef()
const carouselref = useRef()


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



function addtocart(id) {
    const find = props.data.find(element => element.customid === id)
    const findcart = cartitem.find(element => element.customid === id)
    const replace = cartitem.filter(item => item.customid !== id)

    if(!findcart) {
        find['time'] = Date.now()  
        find['productcount'] = productcount
        const newfind = { ...find } 
        setcartitem([...cartitem, newfind].sort(function (a, b) {return b.time - a.time;}))
        console.log('ssss')
     } else {
       console.log('dam')
       const newfind = { ...find } 
       setcartitem([...replace, newfind].sort(function (a, b) {return b.time - a.time;}))
     }

}



const [style, setstyle] = useState(false)
const [img1, setimg1] = useState('')
const [img2, setimg2] = useState('')
const [bigimg, setbigimg] = useState('')
const [productcount, setproductcount] = useState(1)


function count(ctype) {
    if(ctype === '+') {
        setproductcount(productcount + 1)
    }

    if(ctype === '-' && productcount > 1) {
        setproductcount(productcount - 1)
    }
}


function showimg(img) {
    setdisplayimg(true)
    setdisplay(img)
}

function outside(e) {
    if(e.target === displayref.current || e.target.parentElement.parentElement.parentElement === carouselref.current) {
        setdisplayimg(false)
    }

}


useEffect(() => {

    window.scrollTo({
        top: 10, 
    });
    
}, [])



useEffect(() => {
    if(productdata) {
        setimg1(productdata.img2)
        setimg2(productdata.img3)
        setbigimg(productdata.img)
    }
}, [props.data])


function hearthing(id) {
    // setstyle(!style)
    const removeitem = favorite.filter(item => item.customid !== id)
    const find = props.data.find(element => element.customid === id)
    // const replace = props.data.filter(element => element.id !== id)
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


    return(
    <div>
       
        {
            productdata ? 
            
            <div>

            <Pagehead 
            title={'წამალი'} 
            adress={
                    { 
                    title1 : 'მთავარი /',
                    title2 : 'წამლები /',
                    title3 : productdata.title
                    }
                } 

            redirect={
                { 
                redirect1 : '/',
                redirect2 : 'drugpage',
                }
            } 
                
                />

            <div className='des-product-content'>



                


            <div className="des-product-wrapper">
                
                <div className="des-product-image-par">
 
            {
                res > 670 ?


                <div className='des-picture-content'>

                 { displayimg ?
                    <div onClick={(e) => outside(e)} ref={displayref} className='des-displayimg-par'>

                 <div onClick={(e) => outside(e)} ref={carouselref} className='des-showimg-carousel '>
                    <Swiper
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    >

                    
                        <SwiperSlide >
                            <div className='showimg-slide'>
                                <img className='showimg-carousel-img' src={display} alt="productimage" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='showimg-slide'>
                              <img className='showimg-carousel-img' src={display === img1 ? productdata.img : img1} alt="productimage" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='showimg-slide'>
                              <img className='showimg-carousel-img' src={display === img2 ? productdata.img : img2} alt="productimage" />
                            </div>
                        </SwiperSlide>

                  </Swiper>

                </div> 
                    </div> : null
                 }
        
                <div className='des-smallimages'>

                    <div className="des-smallimage-wrapper">
                        <div onClick={() => showimg(img1)} onMouseEnter={() => setbigimg(img1)} className="des-smallimage-par">
                            <img className="des-smallimage-pic" src={img1} alt="" />
                        </div>
                    </div>

                    <div className="des-smallimage-wrapper">
                        <div onClick={() => showimg(img2)} onMouseEnter={() => setbigimg(img2)} className="des-smallimage-par">
                            <img className="des-smallimage-pic" src={img2} alt="" />
                        </div>
                    </div>

                </div>

                    <div className="des-bigimage-wrapper">
                        <div onClick={() => showimg(bigimg)} onMouseEnter={() => setbigimg(productdata.img)} className="des-big-image-par">
                        <img className="des-bigimage" src={bigimg} alt="" />
                        </div>
                    </div>

                </div>  

                : 

               <div className='productpage-carousel-par'>


                   
                   { displayimg ?
                    <div onClick={(e) => outside(e)} ref={displayref} className='des-displayimg-par'>

                 <div onClick={(e) => outside(e)} ref={carouselref} className='des-showimg-carousel '>
                    <Swiper
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    >

                    
                        <SwiperSlide >
                            <div className='showimg-slide'>
                                <img className='showimg-carousel-img' src={display} alt="productimage" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='showimg-slide'>
                              <img className='showimg-carousel-img' src={display === img1 ? productdata.img : img1} alt="productimage" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='showimg-slide'>
                              <img className='showimg-carousel-img' src={display === img2 ? productdata.img : img2} alt="productimage" />
                            </div>
                        </SwiperSlide>

                  </Swiper>

                </div> 
                    </div> : null
                 }


                 
              
                    <Swiper
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    >

                        <SwiperSlide>
                            <div className='productpage-slide'>
                                <img onClick={() => showimg(productdata.img)} className='productpage-carousel-img' src={productdata.img} alt="productimage" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='productpage-slide'>
                              <img onClick={() => showimg(productdata.img2)} className='productpage-carousel-img' src={productdata.img2} alt="productimage" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='productpage-slide'>
                              <img onClick={() => showimg(productdata.img3)} className='productpage-carousel-img' src={productdata.img3} alt="productimage" />
                            </div>
                        </SwiperSlide>

                  </Swiper>

               </div>
            
            }


                <div className='des-sidetext'>
                    
                    <p className='side-name'>{productdata.title}</p>

                    <p className='side-price'>{productdata.price} ლარი</p>
                    
                    <p className='side-texts'>{productdata.usage}</p>
                    <p className='side-texts'>ქვეყანა : {productdata.country}</p>
                    <p className='side-texts'>მწარმოებელი : {productdata.manufacturer}</p>
                    {
                        parseInt(productdata.amount) > 0  ? 
                        <p className='side-texts' >{productdata.amount}</p>
                        : null
                    }
                    <p className='side-texts'>კატეგორია : {productdata.Category}</p>

                    <div className='dummy'>
                        <button onClick={() => count('-')} className='count-button'>-</button>
                        <div>{productcount}</div>
                        <button onClick={() => count('+')} className='count-button'>+</button>
                    </div>

                    <div className='des-add-par'>

                    <button onClick={() => addtocart(productdata.customid)} className='des-add'>კალათაში ჩამატება</button>

                    <div onClick={() => hearthing(productdata.customid)} className={productdata.hearted ? 'des-hearth-par-a' : 'des-hearth-par'}>
                        <img className='des-hearth-img' src={productdata.hearted ? white : gray} alt="hearth" />
                    </div>

                    </div>

                </div>

                </div>

            </div>

           <div className='des-anotation-wrapper'>
            <div className='des-anotation'>
                 <p className='des-anot-text'>რადუქსინი საერთაშორისო დასახელება - raduksin ათქ.კლასიფიკაციის კოდი - M01AE01 კლინიკურ-ფარმაკოლოგიური ჯგუფი არასტეროიდული ანთების საწინააღმდეგო საშუალებები, პროპიონის მჟავას წარმოებული პრეპარატები გამოხატული ანალგეზიური ეფექტით ერთი გარსით გაფარული ტაბლეტი შეიცავს აქტიურ ნივთიერებას - იბუპროფების 400 მგ და დამხმარე ნივთიერებებს: ნატრიუმის კროსკარმელოზას, ნატრიუმის ლაურილსულფატს, ნატრიუმის ციტრატს, სტეარინის მჟავას, სილიციუმის კოლოიდურ ანჰიდრინს, ნატრიუმის კარმელოზას, ტალკს, აკაციას, საქაროზას, ტიტანის დიოქსიდს, მაგროგოლი 600-ს, ოპაკოდ S-1-9460 HV ყავისფერ სამრეწველო მეთილირებულ სპირტს, გამოხდილ წყალს. აღწერა ტაბლეტები 1,25 მგ და 10 მგ; თეთრი მრგვალი ორმხრივად ამოზნექილი ტაბლეტი, ერთგვაროვანი სტრუქტურით, ტაბლეტის ერთ მხარეს წითელი ფერის წარწერით: „Nurofen 400“. ფარმაკოლოგიური თვისებები პრეპარატი მიეკუთვნება არასტეროიდულ ანთების საწინააღმდეგო პრეპარატს. გააჩნია ტკივილგამაყუჩებელი, სიცხის დამწევი და ანთების საწინააღმდეგო მოქმედება. ახდენს ცოგ1-ისა და ცოგ2-ის არასელექციურ ბლოკადას. იბუპროფენის მოქმედების მექანიზმი განპირობებულია პროსტაგლანდინების-ტკივილის, ანთებისა და ჰიპერთერმული რეაქციის მედიატორების- სინთეზის დათრგუნვით. ფარმაკოკინეტიკა მისი აბსორბცია მაღალია. T 1/2 ნახევარგამოყოფის პერიოდი - 2 საათი; პლაზმის ცილებთან შეკავშირების ხარისხი - 90%. ნელა აღწევს სახსრების შიგნით, სადაც ხდება მისი შეკავება სინოვიალურ ქსოვილში, რომელშიც მისი კონცენტრაცია უფრო მარალია, ვიდრე პლაზმაში. აბსორბციის შემდეგ ფარმაკოლოგიურად არააქტიური R-ფორმის დაახლოებით 60% ნელა გარდაიქმნება აქტიურ S- ფორმად. განიცდის მეთაბოლიზმს. ელიმინირება თირკმლებით (უცვლელი სახით- არაუმეტეს 1%-სა) ხორციელდება, ნაკლებად- ნაღველთან ერთად.</p>
            </div>  
           </div>
  

           </div>

            </div>
            
            : null
        }

    </div>
    )
}

