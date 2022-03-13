import './drugpage.css'
import { Pagehead } from "../product-head/pagehead";
import { Productslot } from "../product-slot/productslot";
import star from './pictures/star.png'
import graystar from './pictures/gray-star.png'
import hearth from './pictures/hearth.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cartcontext from '../../cartcontext';
import { useContext } from 'react';



export function Drugpage(props) {

  const {cartitem, setcartitem} = useContext(Cartcontext)
   



    const [category, setcategory] = useState([])
    const [drugpagedata, setdrugpagedata] = useState([])
    const [drugpagedata2, setdrugpagedata2] = useState([])
    const [min, setmin] = useState('')
    const [max, setmax] = useState('')
 
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
             setdrugpagedata(data)
             setdrugpagedata2(data)
          })

       }
       getdata()
 
    }, [props.data])



    useEffect(() => {

      props.data.forEach(element => {
         // console.log(element.title)
         setcategory([...category, element.title])
      });

    }, [props.data])
    
   //  console.log(category)




   //  if(category.length > 0) {

   //    props.data.forEach(element => {

   //       // category.forEach(element2 => {
   //       //    if(element.category !==  element2.category) {
   //       //       console.log(element)
   //       //    }
   //       // })

   //       // console.log(category)
   // });

   //  }


    
 
     


 function alldata() {
   setdrugpagedata(props.data)
   setdrugpagedata2(props.data)
 }
 
    function filtercat(category) {
      let filteredData = props.data.filter(item => item.Category === category )
      setdrugpagedata(filteredData)
      setdrugpagedata2(filteredData)
    }
 

 
    function filterprice() {
 
       if(min && !max) {
       let filteredData = drugpagedata2.filter(item => item.price >= min )
       setdrugpagedata(filteredData)
       }
 
       if(max && !min) {
          let filteredData = drugpagedata2.filter(item => item.price <= max )
          setdrugpagedata(filteredData)
          }
 
       if(max && min) {
          let filteredData = drugpagedata2.filter(item => item.price <= max && item.price >= min )
          setdrugpagedata(filteredData)
          }
 
       if(!max && !min) {
          setdrugpagedata(drugpagedata2)
          } 
 
     }
 
    // console.log(homedata)
    
    function mini(e) {
       setmin(e.target.value)
    }
 
    function maxi(e) {
       setmax(e.target.value)
    }
 
    useEffect(() => {
 
       filterprice()
      
    }, [max, min])


    function addtocart(id) {
      const find = props.data.find(element => element.id === id)
      const findcart = cartitem.find(element => element.id === id)
      if(find !== findcart) {
          find['productcount'] = 1  
          setcartitem([...cartitem, find])
      } else {
          setcartitem([...cartitem])
      }
  }



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
            
            <div className='drugpage-filters'>
              <p className='drugpage-filters-title'>filtrebi</p> 
              <div className='drug-input-par'>
              <input className='drug-input' onChange={(e) => mini(e)} value={min} type="number" placeholder="min" />
              <input className='drug-input' onChange={(e) => maxi(e)} value={max} type="number" placeholder="max" />  
              </div>
              <button onClick={alldata}>მაჩვენე ყველაფერი</button>          
              {/* <button onClick={filter}>medical devices</button>     */}
              {
                 props.data ? 
                 props.data.map((item, index) => {
                    return(
                    <button onClick={(e) => filtercat(item.Category)} key={index}>{item.Category}</button>
                    )
                 })
                 : null
              }      
            </div>

            <div className='drugpage-lowfilter'>
                
            </div>
            
        </div>



     <div className='drug-wrapper-par'>
       <div className="drugs-wrapper">

        {
            props.data ? 
            drugpagedata.map((item, index) => {
                return (

                     <div key={index} className='link-wrap'>

                  <Link to={`/${item.id}`}>


                    <div className='drug-product-slot'>
                    {/* <div className={`fade ${callfade}`}></div> */}
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
                        <img className='drug-hearth' src={hearth} alt="hearth" />
                    </div>
                </div>
                
                <div className='drug-picture-wrapper'>
                <img className='drug-product-img' src={item.img} alt="item-pic" />  
                </div>
                <div className='drug-product-text-wrapper'>
                <p className='drug-product-title'>{item.title}</p>
                <p className='drug-product-category'>{item.Category}</p>
                </div>
        
            </div>
            </Link>

              <div className='drug-price-wrapper'>
                <p className='drug-price'>{item.price} ლარი</p> 
                <button onClick={() => addtocart(item.id)} className='drug-buy'>ყიდვა</button>
               </div>


            </div>



                )
            })
            : null
        }
      </div> 
     </div>


     </div>
        
        </div>


    )
}