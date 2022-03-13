import './productslot.css'
import star from './pictures/star.png'
import graystar from './pictures/gray-star.png'
import hearth from './pictures/hearth.png'


    


export function Productslot({data, item, callfade}) {




    return (


            <div className='product-slot'>
            <div className={`fade ${callfade}`}></div>
            <div className='rating-par'>
            <div className='rating'>
            <div className='star-wrapper'>

                <div className='graystar-wrapper'>
                <img className='graystar' src={graystar} alt="graystar" />
                <img className='graystar' src={graystar} alt="graystar" />
                <img className='graystar' src={graystar} alt="graystar" />
                <img className='graystar' src={graystar} alt="graystar" />
                <img className='graystar' src={graystar} alt="graystar" />
                </div>

            <div className='stars'>
                {item.rating.map((item2, index) => {
                    return (                 
                    <img key={index}  className='star' src={star} alt="star" />
                    )
                } )}
            </div>

                </div>
                <img className='hearth' src={hearth} alt="hearth" />
            </div>
        </div>
        
        <div className='picture-wrapper'>
        <img className='product-img' src={item.img} alt="item-pic" />  
        </div>
        <div className='product-text-wrapper'>
        <p className='product-title'>{item.title}</p>
        <p className='product-category'>{item.Category}</p>
        </div>


    </div>

    )
}