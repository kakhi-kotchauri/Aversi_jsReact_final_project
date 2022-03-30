import './profilepage.css'
import { Pagehead } from '../product-head/pagehead'
import { useEffect, useRef, useState } from 'react'
import eye from './pictures/eye.png'
import { useNavigate } from 'react-router-dom'


export function Profielpage(props) {

    const [newphone, setnewphone] = useState(props.currentuser ? props.currentuser.phone : null)
    const [newemail, setnewemail] = useState(props.currentuser ? props.currentuser.email : null)
    const [newpassword, setnewpassword] = useState(props.currentuser ? props.currentuser.password : null)
    const [confirmpassword, setconfirmpassword] = useState('')
    const [pas, setpas] = useState(false)
    const [showpass, setshowpass] = useState(false)
    const [changed, setchanged] = useState(false)
    const [newcolor, setnewcolor] = useState('')
    const [toglecolor, settoglecolor] = useState(false)
    const {curentuserupdate, setcurentuserupdate} = props.update

    const phoneref = useRef()
    const emailref = useRef()
    const passwordref = useRef()
    const confirmpasswordref = useRef()


    const nav = useNavigate()


    useEffect(() => {
        if(!props.currentuser) {
        nav('/')
        }
    }, [])
    




    function submit(e) {

        e.preventDefault()


        
        if(newcolor) {
            setcurentuserupdate(!curentuserupdate)
            props.currentuser.color = newcolor
            window.scroll(0, 0)
            setchanged(true)
            setTimeout(() => {
                setchanged(false)
            }, 2000);
        }


        if(newphone && newemail && newpassword) {
            if(newphone && newphone !== props.currentuser.phone) {
                props.currentuser.phone = newphone
                window.scroll(0, 0)
                setchanged(true)
                setTimeout(() => {
                    setchanged(false)
                }, 2000);    
            }
            if(newemail && newemail !== props.currentuser.email) {
                props.currentuser.email = newemail
                window.scroll(0, 0)
                setchanged(true)
                setTimeout(() => {
                    setchanged(false)
                }, 2000);    
            }
            if(newpassword && confirmpassword && newpassword === confirmpassword && newpassword !== props.currentuser.password) {
                props.currentuser.password = newpassword
                window.scroll(0, 0)
                setchanged(true)
                setTimeout(() => {
                    setchanged(false)
                }, 2000);    
            }

            if(props.currentuser.password === newpassword) {
                setshowpass(false)
            }

        }


        if(!newphone) {
            setnewphone('')
            phoneref.current.style.borderColor = 'red'
            phoneref.current.placeholder = 'ველი ცარიელია'
        }

        if(!newemail) {
            setnewemail('')
            emailref.current.style.borderColor = 'red'
            emailref.current.placeholder = 'ველი ცარიელია'
        }

        if(!newpassword) {
            setnewpassword('')
            passwordref.current.style.borderColor = 'red'
            passwordref.current.placeholder = 'ველი ცარიელია'
        }

        if(!confirmpassword && showpass) {
            setconfirmpassword('')
            confirmpasswordref.current.style.borderColor = 'red'
            confirmpasswordref.current.placeholder = 'ველი ცარიელია'
        }

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
  
                      {
                          changed ?
                          <p className='profilechanged'>ცვლილებები შენახულია</p>
                          : null
                      }
  
  
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
                        <input ref={phoneref} onChange={(e) => setnewphone(e.target.value)} value={newphone} className='profile-input' type="number" />
                    </div>
  
                    <div className='profile-inputs'>
                        <p className='profile-input-title'>ელ-ფოსტა</p>
                        <input ref={emailref} onChange={(e) => setnewemail(e.target.value)} value={newemail} className='profile-input' type="text" />
                    </div>
  
                    <div onFocus={() => !showpass ? setshowpass(!showpass) : null} className='profile-inputs'>
                        <p className='profile-input-title'>პაროლი</p>
                        <div className='profile-input-par'>
                        <input ref={passwordref} onChange={(e) => setnewpassword(e.target.value)} value={newpassword} className='profile-input' type={pas ? 'text' : 'password'} />
                        <img onClick={() => setpas(!pas)} className='profile-eye' src={eye} alt="visibility" />
                        </div>
                    </div>

                    {
                        showpass ? 

                       <div className='profile-inputs'>
                        <p className='profile-input-title'>გაიმეოორეთ პაროლი</p>
                        <div className='profile-input-par'>
                        <input ref={confirmpasswordref} onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword} className='profile-input' type={pas ? 'text' : 'password'} />
                        <img onClick={() => setpas(!pas)} className='profile-eye' src={eye} alt="visibility" />
                        </div>
                       </div>

                       : null

                    }



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