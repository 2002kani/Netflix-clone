import "./Navbar.css"
import Logo from "../../Assets/logo.png"
import SuchIcon from "../../Assets/search_icon.svg"
import BenachrichtigungIcon from "../../Assets/bell_icon.svg"
import ProfilIcon from "../../Assets/profile_img.png"
import PfeilIcon from "../../Assets/caret_icon.svg"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-links">
                <img src={Logo} alt="Netflix"></img>
                <ul>
                    <li> Home </li>
                    <li> Serien </li>
                    <li> Filme </li>
                    <li> Beliebt </li>
                    <li> Meine Liste </li>
                    <li> Suche durch Sprache </li>
                </ul>
            </div>

            <div className="navbar-rechts">
                <img src={SuchIcon} alt="Suche" className="icons"></img>
                <p> Kinder </p>
                <img src={BenachrichtigungIcon} alt="" className="icons"></img>
                <div className="navbar-profil">
                    <img src={ProfilIcon} alt="" className="profil"></img>
                    <img src={PfeilIcon} alt=""></img>
                    <div className="abmelden-dropdown">
                        <p> Abmelden </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar