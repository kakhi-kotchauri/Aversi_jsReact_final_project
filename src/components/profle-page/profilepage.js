import './profilepage.css'
import { Pagehead } from '../product-head/pagehead'
import { useEffect, useRef, useState } from 'react'
import eye from './pictures/eye.png'
import { useNavigate } from 'react-router-dom'


export function Profielpage(props) {

    const [newphone, setnewphone] = useState(props.currentuser ? props.currentuser.phone : null)
    const [newemail, setnewemail] = useState(props.currentuser ? props.currentuser.email : null)
    const [newpassword, setnewpassword] = useState(props.currentuser ? props.currentuser.password : null)
    const [pas, setpas] = useState(false)
    const [newcolor, setnewcolor] = useState('')
    const [toglecolor, settoglecolor] = useState(false)
    const {curentuserupdate, setcurentuserupdate} = props.update

    const nav = useNavigate()


    useEffect(() => {
        if(!props.currentuser) {
        nav('/')
        }
    }, [])
    
    console.log(curentuserupdate)


    function submit(e) {

        console.log('test')

        e.preventDefault()
        
        if(newcolor) {
            setcurentuserupdate(!curentuserupdate)
        props.currentuser.color = newcolor
        }
        props.currentuser.phone = newphone
        props.currentuser.email = newemail
        props.currentuser.password = newpassword
    }


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
  
                <div className='profile-info'></div>
  
                <form onSubmit={(e) => submit(e)}>
  
                <div className='profile-panel'>
  
                    <p className='profile-maintitle'>პირადი ინფორმაციის რედაქტირება</p>
  
  
  
                    <div className='profile-img-par'>
                        <div style={{backgroundColor : newcolor ? newcolor : props.currentuser.color}} className='profile-img'>{props.currentuser.firstname}</div>
                        <div className='profile-change-par'>
                        <p onClick={() => settoglecolor(!toglecolor)} className='profile-change'>ფერის შეცვლა</p>
                        {
                            toglecolor ?
                            <input value={'#4ed1e6'} className='colorpicker' onChange={(e) => setnewcolor(e.target.value)} type="color" />
                             : null
                        }
                        </div>
                    </div>
  
  
  
                    <div className='profile-inputs'>
                        <p className='profile-input-title'>ტელეფონის ნომერი</p>
                        <input onChange={(e) => setnewphone(e.target.value)} value={newphone} className='profile-input' type="number" />
                    </div>
  
                    <div className='profile-inputs'>
                        <p className='profile-input-title'>ელ-ფოსტა</p>
                        <input onChange={(e) => setnewemail(e.target.value)} value={newemail} className='profile-input' type="text" />
                    </div>
  
                    <div className='profile-inputs'>
                        <p className='profile-input-title'>პაროლი</p>
                        <div className='profile-input-par'>
                        <input onChange={(e) => setnewpassword(e.target.value)} value={newpassword} className='profile-input' type={pas ? 'text' : 'password'} />
                        <img onClick={() => setpas(!pas)} className='profile-eye' src={eye} alt="visibility" />
                        </div>
                    </div>
  
  
                    <button type='submit' className='profile-button'>შენახვა</button>
  
  
                </div>
  
                </form>
  
            </div>
  
            </div>
  

                

                :

                <div>error</div>
            }


          
        </div>
    )
    
}