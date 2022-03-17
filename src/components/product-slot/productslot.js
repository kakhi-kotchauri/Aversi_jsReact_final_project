import './productslot.css'
import star from './pictures/star.png'
import graystar from './pictures/gray-star.png'
import hearth from './pictures/hearth.png'
import redhearth from './pictures/redhearth.png'
import { useContext } from 'react'
import Favoritecontext from '../../favoritecontext'



    


export function Productslot({data, item, callfade}) {


const {favorite, setfavorite} = useContext(Favoritecontext)




    
   function hearting(id) {
       console.log('test')
    const removeitem = favorite.filter(item => item.id !== id)
    const find = data.find(element => element.id === id)
    const replace = data.filter(element => element.id !== id)
    if(find['hearted'] === true) {
       find['hearted'] = false
       setfavorite(removeitem)
    } else {
       find['hearted'] = true
       setfavorite([...favorite, find])
    }
    // setdrugpagedata([...replace, find].sort(function (a, b) {return a.id - b.id;})) 
 }




    return (


            <div className='product-slot'>
            <div className={`fade ${callfade}`}></div>
            <div className='rating-par'>
            <div className='rating'>
            <div className='star-wrapper'>

                <div className='graystar-wrapper'>
                <img className='graystar' src={graystar} alt="graystar" />
                <img className='graystar' src={graystar} alt="graystar" />
                <img className='graystar' src={graystar} alt="graystar" />
                <img className='graystar' src={graystar} alt="graystar" />
                <img className='graystar' src={graystar} alt="graystar" />
                </div>

            <div className='stars'>
                {item.rating.map((item2, index) => {
                    return (                 
                    <img key={index}  className='star' src={star} alt="star" />
                    )
                } )}
            </div>

                </div>
                <img onClick={() => hearting(item.id)} className='hearth' src={item.hearted ? redhearth : hearth} alt="hearth" />
            </div>
        </div>
        
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