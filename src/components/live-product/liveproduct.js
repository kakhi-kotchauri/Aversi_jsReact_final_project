import './liveproduct.css'
import { useState, useEffect } from "react"
import right from './pictures/arrow-right.png'
import left from './pictures/arrow-left.png'
import { Productslot } from '../product-slot/productslot'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Cartcontext from '../../cartcontext'
import Favoritecontext from '../../favoritecontext'
import star from './pictures/star.png'
import graystar from './pictures/gray-star.png'
import hearth from './pictures/hearth.png'
import redhearth from './pictures/redhearth.png'




export function Liveproduct(props) {

    const {cartitem, setcartitem} = useContext(Cartcontext)
    const {favorite, setfavorite} = useContext(Favoritecontext)
    const [start, setstart] = useState(0)
    const [end, setend] = useState(4)
    const [callfade, setcallfade] = useState('')
    const [productarr, setproductarr] = useState([])
    const [status, setstatus] = useState(1)
    const step = 4


    useEffect(() => {

      
    function promise(data) {
        return new Promise(resolve => {
           resolve(data)
        })
     }
  
     async function getdata() {
        await promise(props.data)
        .then(data => {
           setproductarr(data.slice(start, end))
        })
    }

    getdata()

    }, [props.data, start, end])



    function moveright() {
        if(end < props.data.length) {
            setstart(start + step)
            setend(end + step)
            setstatus(status + 1)
            setcallfade('callfade')
            setTimeout(() => {
              setcallfade('')
            }, 200);
        }
    }

    function moveleft() {
        if(start > 0) {
            setstart(start - step)
            setend(end - step)
            setstatus(status - 1)
            setcallfade('callfade')
            setTimeout(() => {
              setcallfade('')
            }, 200);
        }
    }

    
   



    console.log(cartitem)



    function addtocart(id) {
        const find = props.data.find(element => element.id === id)
        const findcart = cartitem.find(element => element.id === id)
        if(find !== findcart) {
            find['time'] = Date.now()  
            find['productcount'] = 1  
            setcartitem([...cartitem, find].sort(function (a, b) {return a.time - b.time;}))
        } else {
            setcartitem([...cartitem].sort(function (a, b) {return a.time - b.time;}))
        }
    }




    
        
    function hearting(id) {
        console.log('test')
    const removeitem = favorite.filter(item => item.id !== id)
    const find = props.data.find(element => element.id === id)
    const replace = props.data.filter(element => element.id !== id)
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
        <section className='live-product-par'>

        <div className='product-head-wrapper'>
                  <p className='product-head-p'>ლიდერები გაყიდვაში</p>
                  <div className='arrow-wrapper'>
                     <img onClick={moveleft} className='arrows' src={left} alt="left" /> 
                     <p>{`${status} / ${Math.ceil(props.data.length / step)}`}</p>
                     <img onClick={moveright} className='arrows' src={right} alt="right" /> 
                  </div>
              </div>
              
    
          <div className='live-product'>
    
            {
                productarr? 
                productarr.map((item, index) => {
                    return(

                    <div className='liveproduct-slot-par' key={index}>
                        <Link to={`/${item.id}`}>
                        <Productslot data={props.data} key={index} item={item} callfade={callfade}/> 
                        </Link>

                        <div className='price-wrapper'>
                        <p className='price'>{item.price} ლარი</p> 
                        <button onClick={() => addtocart(item.id)} className='buy'>ყიდვა</button>
                        </div>

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

                         <img 
                         onClick={() => hearting(item.id)} 
                         className='hearth' 
                         src={item.hearted ? redhearth : hearth} alt="hearth"
                          />
                          
                        </div>
                    </div>

                 </div>
                        
                    )
                })
                : <div>no</div>
            }
          </div>
    
          </section>
    )
}