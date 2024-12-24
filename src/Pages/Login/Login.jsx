import "./Login.css"
import Logo from "../../Assets/logo.png"
import { useState } from "react";

const Login = () => {

    const [signState, setSignState] = useState("Anmelden");

    return(
        <div className="login">
            <img src={Logo} className="login-logo"></img>
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === "Registrieren" ? <input type="text" placeholder="Dein Name"/> : <></> }
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
                    {signState === "Registrieren" ? <p> Schon Registriert? <span onClick={() => {setSignState("Anmelden")}}> Jetzt Anmelden </span></p> : <p> Neu auf Netflix? <span onClick={()=> {setSignState("Registrieren")}}> Jetzt Registrieren </span></p>}
                </div>
            </div>
        </div>
    );
} 

export default Login