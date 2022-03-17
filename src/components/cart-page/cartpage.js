import { Link } from 'react-router-dom'
import { Pagehead } from '../product-head/pagehead'
import { useContext, useState } from 'react'
import Cartcontext from '../../cartcontext'
import Itemstatus from '../../itemstatus'
import {Liveproduct} from '../live-product/liveproduct'
import './cartpage.css'





export function Cartpage(props) {


  const {cartitem, setcartitem} = useContext(Cartcontext)
  // const {sortarr, setsortarr} = useContext([])
  const {itemstatus, setitemstatus} = useContext(Itemstatus)



  function counter(id, type) {
    setitemstatus(false)
    const findcart = cartitem.find(element => element.id === id)
    const replace = cartitem.filter(item => item.id !== id)


    if(type === '+') {
      findcart['productcount'] = findcart.productcount + 1
      setcartitem([...replace, findcart].sort(function (a, b) {return a.time - b.time;}))
    } else if (type === '-' && findcart.productcount > 1) {
        findcart['productcount'] = findcart.productcount - 1
        setcartitem([...replace, findcart].sort(function (a, b) {return a.id - b.time;}))
    }
}

    

    function remove(id) {
        const removeitem = cartitem.filter(item => item.id !== id)
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

                <Link  to={`/${item.id}`}>
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
                <button className='cart-counter-button' onClick={ () => counter(item.id, '-')}>-</button>
                <p className='cart-product-prices'>{item.productcount}</p>
                <button className='cart-counter-button' onClick={ () => counter(item.id, '+')}>+</button>
                </div>

                
                <div className='cart-right-product'>
                <p className='cart-product-prices'>{tofloat(item.price * item.productcount, 2)} ლ</p>
                  <p className='cart-delete' onClick={() => remove(item.id)}>წაშლა</p>
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
            <p>პროდუქცია</p>
            <p>{ssd(cartitem)} ლ</p>
          </div>
          <div className='cart-sum-slots'>
            <p>მიტანის საკომისიო</p>
            <p>0 ლ</p>
          </div>
          <div className='cart-sum-slots'>
            <p>გაქვს ვაუჩერი ?</p>
          </div>
        </div>
      </div>

      </div>

        
      <p className='cart-caution'>გაყიდული პროდუქცია დაბრუნებას ან/და შეცვლას არ ექვემდებარება</p>
     
     <Liveproduct data={props.originaldata}/>


 </div>
    )
}