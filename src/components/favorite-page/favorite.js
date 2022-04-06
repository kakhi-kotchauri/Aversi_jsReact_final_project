import { Link } from 'react-router-dom'
import { Pagehead } from '../product-head/pagehead'
import { useContext, useState } from 'react'
import {Liveproduct} from '../live-product/liveproduct'
import './favorite.css'
import Favoritecontext from '../../favoritecontext'



export function Favorite(props) {


const {favorite, setfavorite} = useContext(Favoritecontext)


// console.log(favorite)


function remove(id) {
    const removeitem = favorite.filter(item => item.customid !== id)
    const find = props.data.find(element => element.customid === id)
    find['hearted'] = false
    setfavorite(removeitem)
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

          <div className='fav-titles'>
              <p className='fav-title-text'>პროდუქციის დასახელება</p>
              <p className='fav-title-text'>ფასი</p>
              <p className='fav-title-text'>რაოდენობა</p>
              <p className='fav-title-text'>ჯამი</p>
          </div>


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
                  <p className='fav-delete' onClick={() => remove(item.customid)}>წაშლა</p>
                </div>
    
          </div>
            )
        })
        
        :
        
        <div className='fav-empty'>
            <p>ფავორიტი პროდუქტები არ არის დამატებული</p>
        </div>
    }
          
          </div>
      </div>
    </div>

     
     <Liveproduct data={props.originaldata}/>


 </div>
    )
}