import "./Login.css"
import Logo from "../../Assets/logo.png"

const Login = () => {
    return(
        <div className="login">
            <img src={Logo} className="login-logo"></img>
            <div className="login-form">
                <h1> Registrieren </h1>
                <form>
                    <input type="text" placeholder="Dein Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Passwort"/>
                    <button> Registrieren </button>
    
                    <div className="form-hilfe">
                        <div className="erinnern">
                            <input type="checkbox" />
                            <label htmlFor="">Erinnere mich</label>
                        </div>
                        <p> Brauchst du Hilfe?</p>
                    </div>
                </form>
                <div className="form-switch">
                    <p> Neu auf Netflix? <span> Jetzt Registrieren </span></p>
                    <p> Hast schon ein Account? <span> Jetzt Anmelden </span></p>
                </div>
            </div>
        </div>
    );
} 

export default Login