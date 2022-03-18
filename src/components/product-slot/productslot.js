import './productslot.css'

import { useContext } from 'react'
import Favoritecontext from '../../favoritecontext'



    


export function Productslot({data, item, callfade}) {










    return (


            <div className='product-slot'>
            <div className={`fade ${callfade}`}></div>
           
        
        <div className='picture-wrapper'>
        <img className='product-img' src={item.img} alt="item-pic" />  
        </div>
        <div className='product-text-wrapper'>
        <p className='product-title'>{item.title}</p>
        <p className='product-category'>{item.Category}</p>
        </div>


    </div>

    )
}