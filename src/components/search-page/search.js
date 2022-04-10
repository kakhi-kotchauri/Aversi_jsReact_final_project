import './search.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import Cartcontext from '../../cartcontext'


export function Search(props) {
    
    const [readydata, setreadydata] = useState([])
    const {cartitem, setcartitem} = useContext(Cartcontext)
    const {setsearchvalue} = props.test
     

    const searcheddata = props.data.filter(item => item.title.includes(props.value))


    useEffect(() => {
    
      return () => {
           setsearchvalue('')
      }
    }, [])

    



    useEffect(() => {

        if(props.value.length > 2) {
            setreadydata(searcheddata)
        } else {
            setreadydata([])
        }      

    }, [props.value])



    function addtocart(id) {
        const find = props.data.find(element => element.customid === id)
        const findcart = cartitem.find(element => element.customid === id)
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
        <div className="search-par">

            {
                props.data && readydata.length > 0 ?
                 readydata.map((item, index) => {
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
                            <div className='cart-product-text'>{item.country}</div>
                            <div className='cart-product-text'>{item.manufacturer}</div>
                          </div>
          
                        </div>
          
                          {/* <p className='cart-product-prices'>{tofloat(item.price, 1)} ლ</p> */}
                          
                          {/* <div className='cart-counter-par'>
                          <button className='cart-counter-button' onClick={ () => counter(item.customid, '-')}>-</button>
                          <p className='cart-product-prices'>{item.productcount}</p>
                          <button className='cart-counter-button' onClick={ () => counter(item.customid, '+')}>+</button>
                          </div>
           */}
                          
                          <div className='cart-right-product'>
                          <p className='cart-product-prices'>{item.price} ლ</p>
                            <p className='cart-delete' onClick={() => addtocart(item.customid)}>ყიდვა</p>
                          </div>
          
                    </div>
         
                      )
      
                 })

               : null

            }


            {

                readydata.length < 1 && props.value.length > 2 ?
                <div className='fav-empty'>
                <p>სასურველი პროდუქტი ვერ მოიძებნა, სცადეთ ძიება სხვა სიტყვებით</p>
                </div>

                : null

            }


        </div>
    )
}