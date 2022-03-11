import './liveoffer.css'
import { useState, useEffect } from 'react'
import right from './pictures/arrow-right.png'
import left from './pictures/arrow-left.png'
import img1 from './pictures/offer1.png'



export function Liveoffer(props) {

  const [offerdata, setofferdata] = useState([])
  const [start, setstart] = useState(0)
  const [end, setend] = useState(4)
  const [callfade, setcallfade] = useState('')
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
               setofferdata(data.slice(start, end))
            })
        }
    
        getdata()
    
        }, [props.data, start, end])


        function moveright() {
            if(end < props.data.length) {
                setstart(start + step)
                setend(end + step)
                setstatus(status + 1)
                setcallfade('offerfade')
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
                setcallfade('offerfade')
                setTimeout(() => {
                  setcallfade('')
                }, 200);
            }
        }



    return (
    <section className='live-offer-par'>
        
        
        <div className='offer-head-wrapper'>
                  <p className='offer-head-p'>მიმდინარე აქციები</p>
                  <div className='offer-arrow-wrapper'>
                     <img onClick={moveleft} className='offer-arrows' src={left} alt="left" /> 
                     <p>{`${status} / ${Math.ceil(props.data.length / step)}`}</p>
                     <img onClick={moveright} className='offer-arrows' src={right} alt="right" /> 
                  </div>
              </div>

      
      <div className='offer-slot-wrapper'>
          {
              offerdata ? 
              offerdata.map((item, index) => {
                 return (
            
                    <div key={index} className='offer-slot'>
                    <div className={`offerfade0 ${callfade}`}></div>
                    <div className='offer-image-wrapper'>
                    <img className='offer-image' src={item.src} alt="offer-image" />
                    </div>
                    <div className='offer-text-wrapper'>
                        <div className='offer-text-par'>
                      <p className='offer-title'>{item.date}</p>
                      <p className='offer-description'>{item.description}</p>
                      </div>
                   </div>
                </div>

                 )
              })
              : null

          }

       </div>

    </section>
    )
}