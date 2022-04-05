import './profilepage.css'
import { Pagehead } from '../product-head/pagehead'
import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import person from './pictures/person.png'
import persona from './pictures/persona.png'
import gift from './pictures/gift.png'
import card from './pictures/card.png'
import arrows from './pictures/arrows.png'
import i from './pictures/i.png'
import { Profileinfo } from './profile-components/profileinfo';
import { Profilescores } from './profile-components/profilescores';
import { Transactions } from './profile-components/transactions';


export function Profielpage(props) {

    // console.log(props.currentuser)



    const nav = useNavigate()

  
    useEffect(() => {
        if(!props.currentuser) {
        nav('/')
        }
    }, [props.currentuser])
    


    return (
        <div >
            <Pagehead 
            title={'პროფილი'} 
            adress={
            { 
            title2 : 'მთავარი /',
            title3 : 'პროფილი '
            }
         } 

         redirect={
            { 
            redirect1 : '',
            redirect2 : '',
            }
         } 
            />
 
            
            {
                props.currentuser ?


                <div className='profilepage-par'>

                <div className='profile-content'>

  
                <div className='profile-info'>

                    <div className='profileinfo-slot'>
                        <img className='profileinfo-img' src={person} alt="icon" />
                        <p onClick={() => nav('*')} className='profileinfo-text'>პირადი ინფორმაცია</p>
                    </div>

                    <div className='profileinfo-slot'>
                        <img className='profileinfo-img' src={card} alt="icon" />
                        <p onClick={() => nav('profile-scores')} className='profileinfo-text'>მტრედი ბარათის ქულების შემოწმება</p>
                    </div>

                    {/* <div className='profileinfo-slot'>
                        <img className='profileinfo-img' src={arrows} alt="icon" />
                        <p className='profileinfo-text'>მტრედი ბარათის ანგარიშზე მიბმა</p>
                    </div> */}


                    <div className='profileinfo-slot'>
                        <img className='profileinfo-img' src={gift} alt="icon" />
                        <p className='profileinfo-text'>საჩუქრის არჩევა ქულების მიხედვით</p>
                    </div>


                    {/* <div className='profileinfo-slot'>
                        <img className='profileinfo-img' src={persona} alt="icon" />
                        <p className='profileinfo-text'>მისამართების მართვა</p>
                    </div> */}


                    <div className='profileinfo-slot'>
                        <img className='profileinfo-img' src={i} alt="icon" />
                        <p onClick={() => nav('profile-transactions')} className='profileinfo-text'>ტრანზაქციების ისტორია</p>
                    </div>

                </div>

 
               <div className='profile-route-par'>
               <Routes>
                   <Route path='*' element={ <Profileinfo props={props}/> }/>
                   <Route path='profile-scores' element={ <Profilescores props={props}/> }/>
                   <Route path='profile-transactions' element={ <Transactions props={props}/> }/>
               </Routes>
               </div>


  
            </div>
  
            </div>
  

                

                :

                <div>error</div>
            }


          
        </div>
    )
    
}