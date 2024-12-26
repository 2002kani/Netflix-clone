import "./Login.css"
import Logo from "../../Assets/logo.png"
import { useState } from "react";
import { login, signup } from "../../Firebase";

const Login = () => {

    const [signState, setSignState] = useState("Anmelden");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="login">
            <img src={Logo} className="login-logo"></img>
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === "Registrieren" ? <input type="text" value={name} onChange={(e)=>{e.target.value}}  placeholder="Dein Name"/> : <></> }
                    <input type="email" value={email} onChange={(e)=>{e.target.value}} placeholder="Email"/>
                    <input type="password" value={password} onChange={(e)=>{e.target.value}} placeholder="Passwort"/>
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