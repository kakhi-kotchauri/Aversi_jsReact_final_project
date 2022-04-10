import { Link } from 'react-router-dom'
import { Pagehead } from '../product-head/pagehead'
import { useContext, useState } from 'react'
import {Liveproduct} from '../live-product/liveproduct'
import './favorite.css'
import Favoritecontext from '../../favoritecontext'
import Cartcontext from '../../cartcontext'



export function Favorite(props) {


const {favorite, setfavorite} = useContext(Favoritecontext)
const {cartitem, setcartitem} = useContext(Cartcontext)



// console.log(favorite)


function remove(id) {
    const removeitem = favorite.filter(item => item.customid !== id)
    const find = props.data.find(element => element.customid === id)
    find['hearted'] = false
    setfavorite(removeitem.sort(function (a, b) {return b.timeheart - a.timeheart;}))
 }



 function addtocart(id) {
  const find = props.data.find(element => element.customid === id)
  const findcart = cartitem.find(element => element.customid === id)
  
  // console.log(findcart)

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



    return (
   <div>

        
            <Pagehead 
        title={'ფავორიტები'} 
        adress= {
        { 
        title2 : 'მთავარი /',
        title3 : 'ფავორიტები'
        }
       } 

        redirect= {
        { 
        redirect1 : '',
        redirect2 : '',
        }
       } 
        />
        

      <div className='fav-product-wrapper'>

<div>
 
      <div className='fav-product-par'>

        {
          favorite.length >= 1 ?

          <div className='fav-titles'>
          <p className='fav-title-text'>პროდუქციის დასახელება</p>
          <p className='fav-title-text'>ფასი</p>
          <p className='fav-title-text'>რაოდენობა</p>
          <p className='fav-title-text'>ჯამი</p>
        </div>

          : null
        }



          {   favorite.length >= 1 ?
              favorite.map((item, index) => {
            return (
              <div key={index} className='fav-product'>
              <div className='fav-product-left'>

                <Link  to={`/${item.customid}`}>
                  <div className='fav-image-par'>
                      <img className='fav-img' src={item.img} alt="favimage" />
                  </div>
                </Link>
                
                <div className='fav-product-text-par'>
                  <div className='fav-product-title'>{item.title}</div>
                  <div className='fav-product-text'>{item.usage}</div>
                  <div className='fav-product-text'> ოდენობა {item.amount}</div>
                </div>

              </div>
       
              <div className='fav-right-product'>
                  <p className='fav-delete' onClick={() => addtocart(item.customid)}>ყიდვა</p>
                  <p className='fav-delete' onClick={() => remove(item.customid)}>წაშლა</p>
                </div>
    
          </div>
            )
        }) : null
    }
          
          </div>
      </div>
    </div>

     
     {
       favorite.length === 0 ?
       <div className='fav-empty-par'>
        <div className='fav-empty'>
          <p>ფავორიტი პროდუქტები არ არის დამატებული</p>
        </div>
      </div>
      : null
     }

<Liveproduct data={props.originaldata}/>



 </div>
    )
}