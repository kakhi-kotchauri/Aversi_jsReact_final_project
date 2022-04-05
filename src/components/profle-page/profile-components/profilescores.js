import './profilescore.css'
import card from '../pictures/card.jpeg'





export function Profilescores({props}) {




    return (

        <div className='profscore-par'>
            <div className='profscore-card-par' >
            <img className='profscore-card' src={card} alt="card" />
                <div className='profscore-value-par'>
                <p className='profscore-score'>{Math.floor(props.currentuser.score)}</p>
                <p className='profscore-score'>ქულა</p>
                </div>
            </div>
            <p className='profscore-info'>100 ქულა უდრის 1 ლარს</p>
            <p className='profscore-info'>ქულების საშუალებით შეგიძლიათ შეიძინოთ ნებისმიერი პროდუქტი ჩვენს ვებსაიტზე</p>

        </div>

    )
}