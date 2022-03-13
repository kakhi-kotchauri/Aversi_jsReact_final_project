import './liveproduct.css'
import { useState, useEffect } from "react"
import right from './pictures/arrow-right.png'
import left from './pictures/arrow-left.png'
import { Productslot } from '../product-slot/productslot'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Cartcontext from '../../cartcontext'




export function Liveproduct(props) {

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


    
    const {cartitem, setcartitem} = useContext(Cartcontext)


    function addtocart(id) {
        const find = props.data.find(element => element.id === id)
        const findcart = cartitem.find(element => element.id === id)
        if(find !== findcart) {
            find['productcount'] = 1  
            setcartitem([...cartitem, find])
        } else {
            setcartitem([...cartitem])
        }
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
                        <Productslot data={productarr} key={index} item={item} callfade={callfade}/> 
                        </Link>

                        <div className='price-wrapper'>
                        <p className='price'>{item.price} ლარი</p> 
                        <button onClick={() => addtocart(item.id)} className='buy'>ყიდვა</button>
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