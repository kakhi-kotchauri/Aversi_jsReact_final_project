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
              <div onClick={() => nav(`/${item.customid}`)} key={index} className='trans-product'>
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
    
    
          </div>
            )
        })
        
        :
        
        <div className='fav-empty'>
            <p>ტრანზაქციები არ არის</p>
        </div>
    }

        </div>
    )
}