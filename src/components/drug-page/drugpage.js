import './drugpage.css'
import { Pagehead } from "../product-head/pagehead";
import { Productslot } from "../product-slot/productslot";
import star from './pictures/star.png'
import graystar from './pictures/gray-star.png'
import hearth from './pictures/hearth.png'
import redhearth from './pictures/redhearth.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cartcontext from '../../cartcontext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Itemstatus from '../../itemstatus';
import Favoritecontext from '../../favoritecontext';
import right from './pictures/arrow-right.png'
import left from './pictures/arrow-left.png'
import { Dropdown } from './dropdown';




export function Drugpage(props) {






   
// let ssd = useParams()

// console.log(ssd)

const {cartitem, setcartitem} = useContext(Cartcontext)
const {itemstatus, setitemstatus} = useContext(Itemstatus)
const {favorite, setfavorite} = useContext(Favoritecontext)

   


   const step = 16
   const [category, setcategory] = useState([])
   const [drugpagedata, setdrugpagedata] = useState([])
   const [pricedata, setpricedata] = useState([])
   const [drugpagedata2, setdrugpagedata2] = useState([])
   const [datastatus, setdatastatus] = useState(false)
   const [min, setmin] = useState('')
   const [max, setmax] = useState('')
   const [mindose, setmindose] = useState('')
   const [maxdose, setmaxdose] = useState('')
   const [start, setstart] = useState(0)
   const [end, setend] = useState(step)
   const [callfade, setcallfade] = useState('')
   const [status, setstatus] = useState(1)
   // const [test, settest] = useState([])


   // console.log(test)



   // console.log(max)
   // console.log(min)

   useEffect(() => {

      function promise(data) {
         return new Promise(resolve => {
            resolve(data)
         })
      }
   
      async function getdata() {
         await promise(props.data)
         .then(data => {
            setdrugpagedata(data.sort(function (a, b) {return a.customid - b.customid;}))
            setdrugpagedata2(data.sort(function (a, b) {return a.customid - b.customid;}))
            setpricedata(data.sort(function (a, b) {return a.customid - b.customid;}))
            // settest(drugpagedata.slice(start, end))
            setdatastatus(true)
         })

      }
      getdata()

      // console.log('test')      

   }, [props.data])



         useEffect(() => {
      
      if(props.category && drugpagedata.length > 0) {
         console.log(props.category)
         filtercat(props.category)
      }
   
      }, [props.data, datastatus])
      
   
   

   useEffect(() => {

      window.scrollTo({
          top: 10, 
      });
      
  }, [])






  function moveright() {
     
   if(end < props.data.length && drugpagedata.slice(start + step, end + step).length !== 0 ) {
       window.scrollTo(0, 0)
       setstart(start + step)
       setend(end + step)
       setstatus(status + 1)
       setcallfade('offerfade')
       setTimeout(() => {
         setcallfade('')
       }, 200);
   }
}


function moveleft() {
   if(start > 0) {
       window.scrollTo(0, 0)
       setstart(start - step)
       setend(end - step)
       setstatus(status - 1)
       setcallfade('offerfade')
       setTimeout(() => {
         setcallfade('')
       }, 200);
   }
}
   

// console.log(props.data.length)
// console.log(drugpagedata.length)
// console.log(drugpagedata.slice(start, end).length)


function alldata() {
   window.scrollTo(0, 0)
   setmin('')
   setmax('')
   setmindose('')
   setmaxdose('')
   setstart(0)
   setend(step)
   setstatus(1)
   setdrugpagedata(props.data)
   setdrugpagedata2(props.data)
}

   function filtercat(category) {
      window.scrollTo(0, 0)
      setstart(0)
      setend(step)
      setstatus(1)
      // console.log('test')
      let filteredData = props.data.filter(item => item.Category === category )
      // console.log(filteredData)
      setdrugpagedata(filteredData)
      setdrugpagedata2(filteredData)
   }


   // console.log(drugpagedata)  


   function filterprice() {

      setstart(0)
      setend(step)
      setstatus(1)

      if(min && !max) {
      let filteredData = drugpagedata2.filter(item => item.price >= min )
      setpricedata(filteredData)
      }

      if(max && !min) {
         let filteredData = drugpagedata2.filter(item => item.price <= max )
         setpricedata(filteredData)
         }

      if(max && min) {
         let filteredData = drugpagedata2.filter(item => item.price <= max && item.price >= min )
         setpricedata(filteredData)
         }

      if(!max && !min) {
         setpricedata(drugpagedata2)
         } 

   }



   function fil() {

      setstart(0)
      setend(step)
      setstatus(1)

      if(mindose && !maxdose) {
      let filteredData = pricedata.filter(item => parseInt(item.amount) >= mindose )
      setdrugpagedata(filteredData)
      }

      if(maxdose && !mindose) {
         let filteredData = pricedata.filter(item => parseInt(item.amount) <= maxdose )
         setdrugpagedata(filteredData)
         }

      if(maxdose && mindose) {
         let filteredData = pricedata.filter(item => parseInt(item.amount) <= maxdose && parseInt(item.amount) >= mindose )
         setdrugpagedata(filteredData)
         }

      if(!maxdose && !mindose) {
         setdrugpagedata(pricedata)
         } 

   }


   console.log(drugpagedata)



   useEffect(() => {

      filterprice()
      
   }, [max, min, drugpagedata2])


   useEffect(() => {

      fil()
      
   }, [maxdose, mindose, pricedata])


   function addtocart(id) {
      const find = props.data.find(element => element.customid === id)
      const findcart = cartitem.find(element => element.customid === id)
      if(find !== findcart) {
            find['time'] = Date.now()  
            find['productcount'] = 1  
         setcartitem([...cartitem, find].sort(function (a, b) {return a.time - b.time;}))
      } else {
         setcartitem([...cartitem].sort(function (a, b) {return a.time - b.time;}))
      }
   }



   function hearting(id) {
      const removeitem = favorite.filter(item => item.customid !== id)
      const find = props.data.find(element => element.customid === id)
      const replace = props.data.filter(element => element.customid !== id)
      if(find['hearted'] === true) {
         find['hearted'] = false
         setfavorite(removeitem)
      } else {
         find['hearted'] = true
         setfavorite([...favorite, find])
      }
      // setdrugpagedata2([...replace, find].sort(function (a, b) {return a.customid - b.customid;})) 
   }



   const uniquecategory = [...new Set(props.data.map(item => item.Category))]


   


   return (


      <div className="drugpage-wrapper">

         <div></div>
            <Pagehead 
            title={'წამალი'} 
            adress={
            { 
            title2 : 'მთავარი /',
            title3 : 'წამლები '
            }
         } 

         redirect={
            { 
            redirect1 : '',
            redirect2 : '',
            }
      } 
            />





   <div className='drugpage-content-par'>
      

      <div className='drugpage-filter-wrapper'>

        
         <div className='test'>
            
            <div className='drugpage-filters'>
            <p className='drugpage-filters-title'>გაფილტვრა</p> 


        <button className='drug-filter-seeall' onClick={alldata}>მაჩვენე ყველაფერი</button>          


         <Dropdown title={'ფასით'}>
         <div className='drug-input-par'>
           <input className='drug-input' onChange={(e) => setmin(e.target.value)} value={min} type="number" placeholder="დან" />
           <input className='drug-input' onChange={(e) => setmax(e.target.value)} value={max} type="number" placeholder="მდე" />  
         </div>
        </Dropdown>

        <Dropdown title={'დოზირებით'}>
        <div className='drug-input-par'>
           <input className='drug-input' onChange={(e) => setmindose(e.target.value)} value={mindose} type="number" placeholder="დან" />
           <input className='drug-input' onChange={(e) => setmaxdose(e.target.value)} value={maxdose} type="number" placeholder="მდე" />  
        </div>        
        </Dropdown>



            {/* <button onClick={filter}>medical devices</button>     */}
            <Dropdown title={'კატეგორიით'}>
            <div className='filter-category'>
            {
               props.data ? 
               uniquecategory.map((item, index) => {
                  return(
                  <button className='drug-filter-button' onClick={() => filtercat(item)} key={index}>{item}</button>
                  )
               })
               : null
            }   
            </div>
            </Dropdown>   
            </div>

            <div className='drugpage-lowfilter'>
               
            </div>

       </div>
         
            
      </div>



   <div className='drug-wrapper-par'>
   {/* <div className='drug-invis'></div> */}

      <div className="drugs-wrapper">

      {
            props.data ? 
            drugpagedata.slice(start, end).map((item, index) => {
               return (

                     <div key={index} className='link-wrap'>
                    <div className={`offerfade0 ${callfade}`}></div>


                  <Link to={`/${item.customid}`}>


                  <div className='drug-product-slot'>
                  {/* <div className={`fade ${callfade}`}></div> */}
               
               <div className='drug-picture-wrapper'>
               <img className='drug-product-img' src={item.img} alt="item-pic" />  
               </div>
               <div className='drug-product-text-wrapper'>
               <p className='drug-product-title'>{item.title}</p>
               <p className='drug-product-title'>{item.amount}</p>
               <p className='drug-product-category'>{item.Category}</p>
               </div>
      
            </div>
            
            </Link>



            <div className='drug-rating-par'>
                  <div className='drug-rating'>
                  <div className='drug-star-wrapper'>
      
                        <div className='drug-graystar-wrapper'>
                        <img className='drug-graystar' src={graystar} alt="graystar" />
                        <img className='drug-graystar' src={graystar} alt="graystar" />
                        <img className='drug-graystar' src={graystar} alt="graystar" />
                        <img className='drug-graystar' src={graystar} alt="graystar" />
                        <img className='drug-graystar' src={graystar} alt="graystar" />
                        </div>
      
                  <div className='drug-stars'>
                        {item.rating.map((item2, index) => {
                           return (                 
                           <img key={index}  className='drug-star' src={star} alt="star" />
                           )
                        } )}
                  </div>
      
                        </div>
                        <img onClick={() => hearting(item.customid)} className='drug-hearth' src={item.hearted ? redhearth : hearth} alt="hearth" />
                  </div>
               </div>




            <div className='drug-price-wrapper'>
               <p className='drug-price'>{item.price} ლარი</p> 
               <button onClick={() => addtocart(item.customid)} className='drug-buy'>ყიდვა</button>
               </div>


            </div>



               )
            })
            : null
      }
      </div> 

   <div  className='drug-switch'>
               
               {
                  drugpagedata.length > step ?

                  <div className='offer-arrow-wrapper'>
                  <img onClick={moveleft} className='offer-arrows' src={left} alt="left" /> 
                  <p>{`${status} / ${Math.ceil(drugpagedata.length / step)}`}</p>
                  <img onClick={moveright} className='offer-arrows' src={right} alt="right" /> 
                 </div>

                   : null
               }
   </div>
  
   </div>


   </div>
      
      </div>


   )
}