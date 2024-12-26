import "./Login.css"
import Logo from "../../Assets/logo.png"
import { useState } from "react";
import { login, signup } from "../../Firebase";

const Login = () => {

    const [signState, setSignState] = useState("Anmelden");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user_auth = async(e)=>{
        e.preventDefault();
        if(signState=== "Anmelden"){
            await login(email, password);
        } else{
            await signup(name, email, password);
        }
    }

    return(
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