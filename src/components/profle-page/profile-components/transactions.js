




export function Transactions({props}) {

    console.log(props.currentuser.transactions)


    return (
        <div>
          
          {   props.currentuser.transactions.length >= 1 ?
              props.currentuser.transactions.sort(function (a, b) {return b.time - a.time;}).map((item, index) => {
            return (
              <div key={index} className='fav-product'>
              <div className='fav-product-left'>

                  <div className='fav-image-par'>
                      <img className='fav-img' src={item.img} alt="favimage" />
                  </div>
                
                <div className='fav-product-text-par'>
                  <div className='fav-product-title'>{item.title}</div>
                  <div className='fav-product-text'>{item.usage}</div>
                  <div className='fav-product-text'> ოდენობა {item.amount}</div>
                </div>

              </div>
    
    
          </div>
            )
        })
        
        :
        
        <div className='fav-empty'>
            <p>ფავორიტი პროდუქტები არ არის დამატებული</p>
        </div>
    }

        </div>
    )
}