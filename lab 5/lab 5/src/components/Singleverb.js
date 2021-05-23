import '../style/Singleverb.css'
import player from '../image/playPhotos.png'

function Singleverb(){
    return(
        <div className="SingleContainer">
            <div className="Anycolor">
                <img className="player" src={player} alt="IDC"/>
            </div>
            <div className="Texts">
                <div>
                <h1 className="titleSingle">Features</h1>
                <span className="Maintext">Dolore ex deserunt aute fugiat aute nukka ea sunt aliqua nisi cupodatat eu. Nostrud in laboris labore nisi amet do dorol eu fugiat consectetur elit cillum esse.</span>
                <div className="makelink">
                    <span className="Aqua">READ OUR FEATURES</span>
                </div>
                </div>
            </div>
            <div className="test"></div>
        </div>
    )
}
export default Singleverb;