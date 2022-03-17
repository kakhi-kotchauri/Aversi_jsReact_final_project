import { Link } from 'react-router-dom'
// import { Pagehead } from '../product-head/pagehead'
import { useContext, useState } from 'react'
// import {Liveproduct} from '../live-product/liveproduct'
import './favorite.css'
import Favoritecontext from '../favoritecontext'



export function Favorite(props) {


const {favorite, setfavorite} = useContext(Favoritecontext)


// console.log(favorite)


function remove(id) {
    const removeitem = favorite.filter(item => item.id !== id)
    const find = props.data.find(element => element.id === id)
    find['hearted'] = false
    setfavorite(removeitem)
 }



    return (
   <div>

{/*         
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
        /> */}
        

      <div className='cart-product-wrapper'>

<div>
 
      <div className='cart-product-par'>

          <div className='cart-titles'>
              <p className='cart-title-text'>პროდუქციის დასახელება</p>
              <p className='cart-title-text'>ფასი</p>
              <p className='cart-title-text'>რაოდენობა</p>
              <p className='cart-title-text'>ჯამი</p>
          </div>


          {   favorite.length >= 1 ?
              favorite.map((item, index) => {
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
       
              <div className='cart-right-product'>
                  <p className='cart-delete' onClick={() => remove(item.id)}>წაშლა</p>
                </div>
    
          </div>
            )
        })
        
        :
        
        <div className='cart-empty'>
            <p>ფავორიტი პროდუქტები არ არის დამატებული</p>
        </div>
    }
          
          </div>
      </div>
    </div>

     
     {/* <Liveproduct data={props.originaldata}/> */}


 </div>
    )
}