
import './dropdown.css'
import React from "react";
import { useState, useEffect } from 'react';
import down from './pictures/down.png'
import up from './pictures/up.png'



export function Dropdown(props) {


    const [togle, settogle] = useState(false)

    const tt = () => settogle(!togle)

    useEffect(() => {  
        settogle(false)
    }, [props.open])
    
    

    return (
        <div>

            <div className='ab-par'>
                <div onClick={() => tt()} className='ab-head'>
                    {props.title}
                    <img className='ab-img' src={togle ? up : down} alt="arrows" />
                </div>
                {
                    togle ?
                     <div className='drop-button-par'>
                      {props.children}
                    </div>
                     
                     : null

                }

            </div>

        </div>
    )
}