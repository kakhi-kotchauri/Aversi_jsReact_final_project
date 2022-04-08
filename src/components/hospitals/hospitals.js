import { Hospitalpopup } from './hospitalpopup'
import './hospitals.css'
import data from './hospitallocation.json'
import pic1 from './pictures/pic1.jpg'
import pic2 from './pictures/pic2.jpg'



export function Hospitals(props) {




    return (
        <div>
            
        <div className='hosp-baner-par' >
           <div className='hosp-baner'></div>
           <p className='hosp-baner-text'>კლინიკები</p>
        </div>

       <div className='popup-content'>

        <Hospitalpopup 
        link={data.loc1} img={pic1} title={'Aversi Clinic • ავერსის კლინიკა'} 
        adress={'ვაჟა ფშაველას ქუჩა, 27ბ '} 
        />

        <Hospitalpopup 
         link={data.loc2}
         img={pic2} title={'ავერსის კლინიკა №2'}
         adress={'ბერი გაბრიელ სალოსის ქუჩა 153ა'} 
         />

       </div>

    </div>
    )
}