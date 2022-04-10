import './profilescore.css'
import card from '../pictures/card.jpeg'





export function Profilescores({props}) {




    return (

        <div className='profscore-par'>

    <p className='profscore-info'>მტრედი ბარათის ქულები</p>
            
            <div className='profscore-card-par' >
            <img className='profscore-card' src={card} alt="card" />
                <div className='profscore-value-par'>
                <p className='profscore-score'>{Math.floor(props.currentuser.score)}</p>
                <p className='profscore-score'>ქულა</p>
                </div>
            </div>
            
            <p className='profscore-info'>ქულების საშუალებით შეგიძლიათ აარჩიოთ საჩუქრები კატალოგიდან</p>

        </div>

    )
}