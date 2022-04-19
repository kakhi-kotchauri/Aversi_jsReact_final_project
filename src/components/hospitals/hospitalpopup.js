import { useState } from 'react'
import camera from './pictures/camera.png'
import loc from './pictures/loc.png'




export function Hospitalpopup( { link, img, title, adress}) {


    const [togle, settogle] = useState(false)

    // console.log(adress)


    return (
    
            <div className='hosp-container'>

            <div className='hosp-slots-par'>

            <div className='hosp-slot'>
                <div className='hosp-slot-left'>
                    <a target='_blank' href={link}>
                    <img className='hosp-slot-left-img' src={loc} alt="location" />
                    </a>
                    <div className='hosp-slot-left-text-par'>
                    <p className='hosp-slot-text'>{title}</p>
                    <p className='hosp-slot-text'>{adress}</p>
                    </div>
                </div>

             <div className='hosp-popup-par'>
                <img onMouseEnter={() => settogle(true)} onMouseLeave={() => settogle(false)} className='hosp-right-img' src={camera} alt="imgr" />
                {
                    togle? 
                    <div className='hosp-popup'>
                        <img className='hosp-popup-img' src={img} alt="pop" />
                    </div>
                    : null
                }
            </div>

         </div>

    </div>
    </div>
    )
    
}