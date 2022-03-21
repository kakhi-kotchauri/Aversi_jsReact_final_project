
import './dropdown.css'
import React from "react";
import { useState } from 'react';


export function Dropdown(props) {

    const [togle, settogle] = useState(false)

    const tt = () => settogle(!togle)
    


    return (
        <div>

            <div className='ab-par'>
                <div onClick={() => tt()} className='ab-head'>{props.title}</div>
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