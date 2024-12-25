import "./Player.css"
import BackArrowIcon from "../../Assets/back_arrow_icon.png"

const Player = () => {
    return(
        <div className="player">
            <img src={BackArrowIcon} alt=""></img>
            <iframe width="90%" height="90%" 
            src="https://www.youtube.com/embed/hkHHwA-vEyQ"
            title="trailer" frameBorder="0" allowFullScreen></iframe>
            <div className="player-info">
                <p>Veröffentlichungsdatum </p>
                <p>Name </p>
                <p>Art</p>
            </div>
        </div>
    );
}

export default Player