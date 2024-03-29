import { Link, useNavigate } from 'react-router-dom'
import { Pagehead } from '../product-head/pagehead'
import { useContext, useEffect, useRef, useState } from 'react'
import Cartcontext from '../../cartcontext'
import Itemstatus from '../../itemstatus'
import {Liveproduct} from '../live-product/liveproduct'
import './cartpage.css'




export function Cartpage(props) {


  const {cartitem, setcartitem} = useContext(Cartcontext)
  // const {sortarr, setsortarr} = useContext([])
  const {itemstatus, setitemstatus} = useContext(Itemstatus)
  const  {value} = props.total
  const  {totalitems} = props.totalitems
  const [menu, setmenu] = useState(false)

  const menuref = useRef()
  const outsideref = useRef()



  useEffect(() => {

    window.scrollTo({
        top: 10, 
    });
    
  }, [])


  function counter(id, type) {
    setitemstatus(false)
    const findcart = cartitem.find(element => element.customid === id)
    const replace = cartitem.filter(item => item.customid !== id)


    if(type === '+') {
      findcart['productcount'] = findcart.productcount + 1
      setcartitem([...replace, findcart].sort(function (a, b) {return b.time - a.time;}))
    } else if (type === '-' && findcart.productcount > 1) {
        findcart['productcount'] = findcart.productcount - 1
        setcartitem([...replace, findcart].sort(function (a, b) {return b.time - a.time;}))
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

    totalitems(cartitem.length)

  }, [cartitem.length])


   useEffect(() => {

     value(ssd(cartitem))

   }, [ssd(cartitem)])
   


   let nav = useNavigate();
    

   function buy() {

    if(props.currentuser && props.data.length >= 1) {
      props.currentuser.score = props.currentuser.score + ssd(cartitem) * 5
      props.currentuser.transactions = [...cartitem, ...props.currentuser.transactions]
      props.currentuser.transactionsum = props.currentuser.transactionsum + ssd(cartitem)
      setcartitem([])
      nav('/buyed')
    } else if(!props.currentuser) {
     setmenu(true)
    }
     
   }



  //  console.log(cartitem)


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


    {
      menu ? 

      <div ref={outsideref} onClick={(e) => e.target === outsideref.current ? setmenu(false) : null} className='cart-register'>
      <div ref={menuref} className='cart-menu'>
         <p className='cart-menu-text'>პროდუქტის შესაძენად გთხოვთ გაიაროთ რეგისტრაცია ან შეხვიდეთ სისტემაში</p>
         <button onClick={() => setmenu(false)} className='cart-menu-button'>დახურვა</button>
      </div>
    </div>

      :null
    }
        


<div className='cart-product-par-wrapper'>
 
      <div className='cart-product-par'>

        {
           props.data.length >= 1 ?

         <div className='cart-titles'>
           <p className='cart-title-text'>პროდუქციის დასახელება</p>
           <p className='cart-title-text'>ფასი</p>
           <p className='cart-title-text'>რაოდენობა</p>
           <p className='cart-title-text'>ჯამი</p>
        </div>

           : null
           
        }



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

              <div className='cart-product-panel-par'>

              <div className='cart-product-panel'>


                <p className='cart-product-prices price-margin'>{tofloat(item.price, 1)} ლ</p>
                
                <div className='cart-counter-par'>
                <button className='cart-counter-button' onClick={ () => counter(item.customid, '-')}>-</button>
                <p className='cart-product-prices'>{item.productcount}</p>
                <button className='cart-counter-button' onClick={ () => counter(item.customid, '+')}>+</button>
                </div>

                </div>

                
                <div className='cart-right-product'>
                <p className='cart-product-prices'>{tofloat(item.price * item.productcount, 2)} ლ</p>
                  <p className='cart-delete' onClick={() => remove(item.customid)}>წაშლა</p>
                </div>

                </div>

          </div>
            )
        }) : null
    }



          </div>

      </div>

      {
        cartitem.length > 0 ?

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

        : null
      }



      </div>

      {
           props.data.length === 0 ?
           <div className='cart-empty-par'>
            <div className='cart-empty'>
            <p>კალათა ცარიელია</p>
           </div>
          </div>
           : null
        }

      {
        cartitem.length > 0 ?
          <p className='cart-caution'>გაყიდული პროდუქცია დაბრუნებას ან/და შეცვლას არ ექვემდებარება</p>
        :null
      }
     
     <Liveproduct data={props.originaldata}/>


 </div>
    )
}