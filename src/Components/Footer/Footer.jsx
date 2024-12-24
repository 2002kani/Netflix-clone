import "./Footer.css"
import FacebookIcon from "../../Assets/facebook_icon.png"
import InstagramIcon from "../../Assets/instagram_icon.png"
import TwitterIcon from "../../Assets/twitter_icon.png"
import YoutubeIcon from "../../Assets/youtube_icon.png"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-icons">
                <img src={FacebookIcon} alt=""></img>
                <img src={InstagramIcon} alt=""></img>
                <img src={TwitterIcon} alt=""></img>
                <img src={YoutubeIcon} alt=""></img>
            </div>
            <ul>
                <li>Audio Beschreibung</li>
                <li>Hilfe</li>
                <li> Geschenke Karten </li>
                <li>Medien</li>
                <li>Investieren</li>
                <li>Karriere</li>
                <li>Nutzungsbedingungen</li>
                <li>Legale Informationen</li>
                <li>Privates</li>
                <li>Rechtliche Hinweise</li>
                <li>Cookie bedingungen</li>
                <li>Kontaktiere uns</li>
            </ul>
            <p className="copyright-text"> © 1997-2024 Netflix, Inc.</p>
        </div>
    )
}

export default Footer