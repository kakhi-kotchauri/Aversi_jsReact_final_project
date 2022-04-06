import './pharmacys.css'
import { useState } from 'react'
import { Popup } from './popup'
import loc from './pictures/loc.png'
import camera from './pictures/camera.png'
import ph1 from './pictures/ph1.jpg'
import ph2 from './pictures/ph2.jpg'
import ph3 from './pictures/ph3.jpg'
import ph4 from './pictures/ph4.jpg'
import ph5 from './pictures/ph5.png'

import data from './locations.json'



export function Pharmacys(props) {

//   console.log(data.ph2)

    return (
        <div>
            
            <div className='pharm-baner-par' >
               <div className='pharm-baner'></div>
               <p className='pharm-baner-text'>აფთიაქები</p>
            </div>
 
           <div className='popup-content'>
            <Popup link={data.ph1} img={ph1} title={'აფთიაქი №13'} adress={'148 დავით აღმაშენებელის გამზირი, თბილისი 0112'} />
            <Popup link={data.ph2} img={ph2} title={'აფთიაქი №23'} adress={'2 პეკინის გამზირი, თბილისი'} />
            <Popup link={data.ph3} img={ph3} title={'აფთიაქი №53'} adress={'11 ალექსანდრე პუშკინის ქუჩა, თბილისი'} />
            <Popup link={data.ph4} img={ph4} title={'აფთიაქი №30'} adress={'54 ილია ჭავჭავაძის გამზირი, თბილისი'} />
            <Popup link={data.ph5} img={ph5} title={'აფთიაქი №0'} adress={'48 ილია ჭავჭავაძის გამზირი, თბილისი'} />
           </div>

        </div>
    )
}