import { useState } from 'react'
import camera from './pictures/camera.png'
import loc from './pictures/loc.png'




export function Popup( { link, img, title, adress}) {


    const [togle, settogle] = useState(false)

    // console.log(adress)


    return (
    
            <div className='pharm-container'>

            <div className='pharm-slots-par'>

            <div className='pharm-slot'>
                <div className='pharm-slot-left'>
                    <a target='_blank' href={link}>
                    <img className='pharm-slot-left-img' src={loc} alt="location" />
                    </a>
                    <div className='pharm-slot-left-text-par'>
                    <p className='pharm-slot-text'>{title}</p>
                    <p className='pharm-slot-text'>{adress}</p>
                    </div>
                </div>

             <div className='popup-par'>
                <img onMouseEnter={() => settogle(true)} onMouseLeave={() => settogle(false)} className='pharm-right-img' src={camera} alt="imgr" />
                {
                    togle? 
                    <div className='pharm-popup'>
                        <img className='pharm-popup-img' src={img} alt="pop" />
                    </div>
                    : null
                }
            </div>

         </div>

    </div>
    </div>
    )
    
}