import { useNavigate } from 'react-router-dom'
import './scorebuy.css'


export function Scorebuy({props}) {

 const scoredata = props.data.filter(item => 
    item.price <= props.currentuser.score * 1 / 100 
    && 
    item.Category === 'კოსმეტიკა' 
    ||
        item.price <= props.currentuser.score * 1 / 100
    && 
    item.Category === 'თმის მოვლა')

    const nav = useNavigate()

    


    return (
        <div className='scorebuy-par'>

          <div className='scorebuy-head'>
            <p className='scorebuy-head-text'>თქვენ გაქვთ </p>
            <p className='scorebuy-head-text'>{props.currentuser.score} ქულა</p>
          </div>

        
        {   scoredata.length >= 1 ?
            scoredata.map((item, index) => {
          return (
            <div onClick={() => nav(`/${item.customid}`)} key={index} className='scorebuy-product'>

            <div className='scorebuy-product-left'>

                <div className='scorebuy-image-par'>
                    <img className='scorebuy-img' src={item.img} alt="scorebuyimage" />
                </div>
              
              <div className='scorebuy-product-text-par'>
                <div className='scorebuy-product-title'>{item.title}</div>
                <div className='scorebuy-product-text'>{item.usage}</div>
                <div className='scorebuy-product-text'> ოდენობა {item.amount}</div>
              </div>

            </div>

            <div>
                <p>{item.price * 100} ქულა</p>
                <p>შეძენა ქულებით</p>
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