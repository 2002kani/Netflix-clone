import "./Login.css"
import Logo from "../../Assets/logo.png"
import { useEffect, useState } from "react";
import { login, signup } from "../../Firebase";
import Netflix_spinner from "../../Assets/netflix_spinner.gif"

const Login = () => {

    const [signState, setSignState] = useState("Anmelden");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const user_auth = async(e)=>{
        e.preventDefault();
        setLoading(true);
        if(signState=== "Anmelden"){
            await login(email, password);
        } else{
            await signup(name, email, password);
        }
        setLoading(false);
    }

    return(
        // Falls es lädt wird div login-spinner angezeigt, falls nicht, dann kompletter code unten
        loading ? <div className="login-spinner">
            <img src={Netflix_spinner} alt=""></img>
        </div> :
        <div className="login">
            <img src={Logo} className="login-logo"></img>
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === "Registrieren" ? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder="Dein Name"/> : <></> }
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Passwort"/>
                    <button onClick={user_auth} type="submit"> {signState} </button>
    
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