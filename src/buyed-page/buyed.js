import { useEffect } from 'react';
import './buyed.css'





export function Buyed(props) {


    useEffect(() => {

        window.scrollTo({
            top: 10, 
        });
        
      }, [])



    return (
        <div className="buyed-par">

<p className='buyed-smalltitle-total'> </p>


            <div className='buyed-content'>
                <p className='buyed-maintitle'>გადახდილია</p>
                <p className='buyed-thanking'>მადლობა თქვენი გადახდა მიღებულია</p>
                <p className='buyed-info-title'>გადახდის დეტალები</p>
                <div className='buyed-info'>

                   <div className='buyed-price-par totalitems'>
                    <p className='buyed-smalltitle'>შეძენილი პროდუქტის ოდენობა</p>
                    <p className='buyed-sep'>:</p>
                     <p className='buyed-price'>{props.totalitems} ერთეული</p>
                    </div>

                    <div className='buyed-price-par'>
                    <p className='buyed-smalltitle'>ჯამური თანხა</p>
                    <p className='buyed-sep'>:</p>
                     <p className='buyed-price'>{props.price} ლარი</p>
                    </div>

                    <div className='buyed-price-par'>
                    <p className='buyed-smalltitle'>უნაღდო ანგარიშსწორებით</p>
                     <p className='buyed-sep'>:</p>
                     <p className='buyed-price'>{props.price} ლარი</p>
                    </div>
                </div>
            </div>

        </div>
    )
}