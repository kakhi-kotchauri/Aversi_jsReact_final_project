import './liveproduct.css'
import { useState, useEffect } from "react"
import right from './pictures/arrow-right.png'
import left from './pictures/arrow-left.png'
import star from './pictures/star.png'
import graystar from './pictures/gray-star.png'
import hearth from './pictures/hearth.png'



export function Liveproduct(props) {

    const [start, setstart] = useState(0)
    const [end, setend] = useState(4)
    const [callfade, setcallfade] = useState('')
    const [productarr, setproductarr] = useState([])


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
            setstart(start + 4)
            setend(end + 4)
            setcallfade('callfade')
            setTimeout(() => {
              setcallfade('')
            }, 200);
        }
    }

    function moveleft() {
        if(start > 0) {
            setstart(start - 4)
            setend(end - 4)
            setcallfade('callfade')
            setTimeout(() => {
              setcallfade('')
            }, 200);
        }
    }


    return (
        <section className='live-product-par'>

        <div className='product-head-wrapper'>
                  <p className='product-head-p'>ლიდერები გაყიდვაში</p>
                  <div className='arrow-wrapper'>
                     <img onClick={moveleft} className='arrows' src={left} alt="left" /> 
                     <img onClick={moveright} className='arrows' src={right} alt="right" /> 
                  </div>
              </div>
    
          <div className='live-product'>
    
            {
                productarr? 
                productarr.map((item, index) => {
                    return(
                      <div key={index} className='product-slot'>
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
                                  <img className='hearth' src={hearth} alt="hearth" />
                                </div>
                             </div>
                             
                          <div className='picture-wrapper'>
                            <img className='product-img' src={item.img} alt="item-pic" />  
                          </div>
                          <p className='product-title'>{item.title}</p>
                          <p className='product-category'>{item.Category}</p>
                          <div className='price-wrapper'>
                             <p className='price'>{item.price} ლარი</p> 
                             <button className='buy'>ყიდვა</button>
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