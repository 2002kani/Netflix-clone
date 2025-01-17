import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar"
import HeroBanner from "../../Assets/hero_banner.jpg"
import HeroTitle from "../../Assets/hero_title.png"
import Play_icon from "../../Assets/play_icon.png"
import Info_icon from "../../Assets/info_icon.png"
import Titlecards from "../../Components/Titlecards/Titlecards"
import Footer from "../../Components/Footer/Footer"


const Home = () => {
    return(
        <div className="home">
            <Navbar/>
            <div className="hero">
                <img src={HeroBanner} alt="" className="banner-img"></img>
                <div className="hero-caption">
                    <img src={HeroTitle} className="caption-img"></img>
                    <p> Nach Entdecken einer geheimen Verbindungen zu einer,
                        uralten Organisation, ist ein, im modernen Istanbul lebender junger Mann auf
                        der Mission die Stadt vor unsterblichen Gegegnern zu retten.</p>
                        <div className="hero-btns">
                            <button className="btn"><img src={Play_icon}></img> Play </button>
                            <button className="btn dark-btn"><img src={Info_icon}></img> Mehr Erfahren </button>
                        </div>
                        <Titlecards category={"now_playing"}/>
                </div>
            </div>
            <div className="more-cards">
                <Titlecards title={"Blockbuster Filme"} category={"top_rated"}/>
                <Titlecards title={"Nur auf Netflix"} category={"popular"}/>
                <Titlecards title={"Neues"} category={"upcoming"}/>
                <Titlecards title={"Empfehlungen für dich"} category={"now_playing"}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home