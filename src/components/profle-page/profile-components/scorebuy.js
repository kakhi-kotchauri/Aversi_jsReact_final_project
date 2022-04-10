import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './scorebuy.css'


export function Scorebuy({props}) {

  const dialogref = useRef()

  const [toggledialog, settoggledialog] = useState(false)
  const [togglebuyed, settogglebuyed] = useState(false)
  const [productname, setproductname] = useState('')
  const [productid, setproductid] = useState(null)
  const pointfactor = 100

 const scoredata = props.data.filter(item => item.Category === 'კოსმეტიკა' || item.Category === 'თმის მოვლა')

    const nav = useNavigate()


    function dialog(name, customid) {

      settoggledialog(true)
      setproductname(name)
      setproductid(customid)
      
    }


    function scorebuy(id) {
      const find = scoredata.find(item => item.customid === id)
      const newfind = { ...find } 
      newfind['type'] = 'gift'
      newfind['scoreprice'] = find.price * pointfactor
      console.log(find)
      console.log(find.price * pointfactor)
      if(props.currentuser.score >= find.price * pointfactor) {
          props.currentuser.score = props.currentuser.score - find.price * pointfactor
          props.currentuser.transactions = [newfind, ...props.currentuser.transactions]
          settogglebuyed(true)  
      } else {
        console.log('ar mogdis too')
      }
      settoggledialog(false)      
    }

    


    return (
        <div className='scorebuy-par'>

          <div className='scorebuy-head'>
            <p className='scorebuy-head-text'>თქვენ გაქვთ </p>
            <p className='scorebuy-head-text'>{props.currentuser.score} ქულა</p>
          </div>

          <div className='scorebuy-head2'>
            <p className='scorebuy-head-text'>კატალოგი </p>
          </div>

        
        {   scoredata.length >= 1 ?
            scoredata.map((item, index) => {
          return (
            <div key={index} className='scorebuy-product'>

            <div className='scorebuy-product-left'>

                <div className='scorebuy-image-par'>
                    <img onClick={() => nav(`/${item.customid}`)} className='scorebuy-img' src={item.img} alt="scorebuyimage" />
                </div>
              
              <div onClick={() => nav(`/${item.customid}`)} className='scorebuy-product-text-par'>
                <div className='scorebuy-product-title'>{item.title}</div>
                <div className='scorebuy-product-text'>{item.usage}</div>
                <div className='scorebuy-product-text'> ოდენობა {item.amount}</div>
              </div>

            </div>

            <div className='scorebuy-right'>
                <p>{item.price * pointfactor} ქულა</p>

                <button
                style={{cursor: props.currentuser.score < item.price * pointfactor ? null : 'pointer' }} 
                className='scorebuy-button'
                disabled={props.currentuser.score < item.price * pointfactor ? true : false}
                onClick={() => dialog(item.title, item.customid)}
                > შეძენა ქულებით </button>
            </div>
  
        </div>
          )
      })
      
      :
      
      <div className='fav-empty'>
          <p>err</p>
      </div>
  }




    {
      toggledialog ? 

      <div 
      className='scorebuy-register'
      ref={dialogref} 
      onClick={(e) => e.target === dialogref.current ? settoggledialog(false) : null}
      >
      <div className='scorebuy-menu'>
         <p className='scorebuy-menu-text'>გსურთ მოცემული პროდუქტის : {productname} - ის შეძენა ?</p>

         <div className='scorebuy-menu-buttons'>
         <button onClick={() => scorebuy(productid)} className='scorebuy-menu-button'>შეძენა</button>
         <button onClick={() => settoggledialog(false)} className='scorebuy-menu-button'>გაუქმება</button>
         </div>

      </div>
    </div>

      :null
    }



    {
      togglebuyed ? 

      <div 
      className='scorebuy-register'
      ref={dialogref} 
      onClick={(e) => e.target === dialogref.current ? settogglebuyed(false) : null}
      >
      <div className='scorebuy-menu'>
         <p className='scorebuy-menu-text'>თქვენ წარმატებით შეიძნეთ {productname} - ი</p>

         <div className='scorebuy-menu-buttons'>
         <button onClick={() => settogglebuyed(false)} className='scorebuy-menu-button'>დახურვა</button>
         </div>

      </div>
    </div>

      :null
    }

      </div>
    )
}