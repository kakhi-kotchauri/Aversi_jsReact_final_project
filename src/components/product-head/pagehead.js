import { Link } from 'react-router-dom'
import './pagehead.css'


export function Pagehead({title, adress, redirect}) {


  // console.log(adress)


    return (
        <div className="page-head-wrapper">
           <div className='page-head-par'>
           <p className="page-head-title">{title}</p>
             <div className='adress-wrapper'>

             <Link to={`${redirect.redirect1}`}>
             <p className="page-head-adress">{adress.title1}</p>
             </Link>

            <Link to={`/${redirect.redirect2}`}>
            <p className="page-head-adress">{adress.title2}</p>
            </Link>

                 <p className="page-head-adress">{adress.title3}</p>
             </div>
          </div>  
        </div>
    )
}