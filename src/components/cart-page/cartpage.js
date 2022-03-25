import { Link, useNavigate } from 'react-router-dom'
import { Pagehead } from '../product-head/pagehead'
import { useContext, useEffect, useState } from 'react'
import Cartcontext from '../../cartcontext'
import Itemstatus from '../../itemstatus'
import {Liveproduct} from '../live-product/liveproduct'
import './cartpage.css'




export function Cartpage(props) {


  const {cartitem, setcartitem} = useContext(Cartcontext)
  // const {sortarr, setsortarr} = useContext([])
  const {itemstatus, setitemstatus} = useContext(Itemstatus)
  const  {value} = props.total




  function counter(id, type) {
    setitemstatus(false)
    const findcart = cartitem.find(element => element.customid === id)
    const replace = cartitem.filter(item => item.customid !== id)


    if(type === '+') {
      findcart['productcount'] = findcart.productcount + 1
      setcartitem([...replace, findcart].sort(function (a, b) {return a.time - b.time;}))
    } else if (type === '-' && findcart.productcount > 1) {
        findcart['productcount'] = findcart.productcount - 1
        setcartitem([...replace, findcart].sort(function (a, b) {return a.time - b.time;}))
    }
}

    

    function remove(id) {
        const removeitem = cartitem.filter(item => item.customid !== id)
        setitemstatus(false)
        setcartitem(removeitem)
     }


     function tofloat(num, decPlaces) {
       
      return num.toFixed(decPlaces)
    
    }





    function ssd(param) {
      if(param.length === 1) {

         return (param[0].price * param[0].productcount)

      } else if(param.length > 1) {

      return param.reduce((total, value) => {return total + value.price * value.productcount}, 0);
           
      } else {
         return 0
      }
   }



   useEffect(() => {

     value(ssd(cartitem))

   }, [ssd(cartitem)])
   


   let nav = useNavigate();
    

   function buy() {

    if(props.data.length >= 1) {
      nav('/buyed')
    }
     
   }



    return (
   <div>

        
            <Pagehead 
        title={'კალათა'} 
        adress= {
        { 
        title2 : 'მთავარი /',
        title3 : 'კალათა'
        }
       } 

        redirect= {
        { 
        redirect1 : '',
        redirect2 : '',
        }
       } 
        />

      <div className='cart-product-wrapper'>



<div>
 
      <div className='cart-product-par'>

          <div className='cart-titles'>
              <p className='cart-title-text'>პროდუქციის დასახელება</p>
              <p className='cart-title-text'>ფასი</p>
              <p className='cart-title-text'>რაოდენობა</p>
              <p className='cart-title-text'>ჯამი</p>
          </div>


          {   props.data.length >= 1 ?
              props.data.map((item, index) => {
            return (
              <div key={index} className='cart-product'>
              <div className='cart-product-left'>

                <Link  to={`/${item.customid}`}>
                  <div className='cart-image-par'>
                      <img className='cart-img' src={item.img} alt="cartimage" />
                  </div>
                </Link>
                
                <div className='left-product-text-par'>
                  <div className='cart-product-title'>{item.title}</div>
                  <div className='cart-product-text'>{item.usage}</div>
                  <div className='cart-product-text'> ოდენობა {item.amount}</div>
                </div>

              </div>

                <p className='cart-product-prices'>{tofloat(item.price, 1)} ლ</p>
                
                <div className='cart-counter-par'>
                <button className='cart-counter-button' onClick={ () => counter(item.customid, '-')}>-</button>
                <p className='cart-product-prices'>{item.productcount}</p>
                <button className='cart-counter-button' onClick={ () => counter(item.customid, '+')}>+</button>
                </div>

                
                <div className='cart-right-product'>
                <p className='cart-product-prices'>{tofloat(item.price * item.productcount, 2)} ლ</p>
                  <p className='cart-delete' onClick={() => remove(item.customid)}>წაშლა</p>
                </div>

          </div>
            )
        })
        
        :
        
        <div className='cart-empty'>
            <p>კალათა ცარიელია</p>
        </div>
    }
          


          </div>

      </div>

      <div className='cart-sum'>
        <div className='cart-sum-div'>
          <div className='cart-sum-slots'>
            <p className='sum-title'>პროდუქცია</p>
            <p className='sum-title'>{ssd(cartitem)} ლარი</p>
          </div>
          <div className='cart-sum-slots'>
            <p className='sum-title'>მიტანის საკომისიო</p>
            <p className='sum-title'>0 ლარი</p>
          </div>
          <div className='cart-sum-slots'>
            <p className='sum-title'>გაქვს ვაუჩერი ?</p>
          </div>
          <div className='sum-line'></div>
          <div className='cart-sum-slots'>
            <p className='sum-title'>სულ</p>
            <p className='sum-title-1'>{ssd(cartitem)} ლარი</p>
          </div>
        </div>
        <button  onClick={() => buy()} className='sum-buy'>ყიდვა</button>
      </div>

      </div>

        
      <p className='cart-caution'>გაყიდული პროდუქცია დაბრუნებას ან/და შეცვლას არ ექვემდებარება</p>
     
     <Liveproduct data={props.originaldata}/>


 </div>
    )
}