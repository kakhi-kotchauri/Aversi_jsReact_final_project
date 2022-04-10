import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './transaction.css'




export function Transactions({props}) {

     const nav = useNavigate()


    return (
        <div className='trans-par'>

          <div className='trans-head'>
            <p className='trans-head-text'>გადახდილი თნახის ტოტალური ოდენობა</p>
            <p className='trans-head-text'>{props.currentuser.transactionsum} ლარი</p>
          </div>
          
          {   props.currentuser.transactions.length >= 1 ?
              props.currentuser.transactions.map((item, index) => {
            return (
       <div onClick={() => nav(`/${item.customid}`)} key={index} className={` trans-product ${item.type === 'gift' ? 'gold' : ''}`}>
              <div className='trans-product-left'>

                  <div className='trans-image-par'>
                      <img className='trans-img' src={item.img} alt="transimage" />
                  </div>
                
                <div className='trans-product-text-par'>
                  <div className='trans-product-title'>{item.title}</div>
                  <div className='trans-product-text'>{item.usage}</div>
                  <div className='trans-product-text'> ოდენობა {item.amount}</div>
                </div>

              </div>

           {
             !item.type ?
             <div className='trans-value-par'>
             <div className='trans-value'>{item.productcount} ცალი</div>
             <div className='trans-value'>{item.price * item.productcount} ლარი</div>
             </div>
             : null
           }

          {
             item.type === 'gift' ?
             <div className='trans-value-gold'>{item.scoreprice} ქულა</div>
             : null
           }
        
          </div>
            )
        })
        
        :
        
        <div className='trans-empty-par'>
            <div className='trans-empty'>
            <p>ტრანზაქციები არ არის</p>
            </div>
        </div>
    }

        </div>
    )
}