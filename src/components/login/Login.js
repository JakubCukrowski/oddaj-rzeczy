import React, {useState} from "react";
import {Navbar} from "../Navbar/Navbar";
import {NavbarStyle} from "../styles/Navbar.style";
import {Link} from "react-router-dom";
import {LoginStyle} from "../styles/Login.style";
import {UserAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router";


export const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [errorText, setErrorText] = useState(null)
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const {signIn} = UserAuth()

    const handleChange = (e) => {
        const {name, value} = e.target
        setCredentials(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleFocus = () => {
        setErrorText(null)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (!credentials.email.match(emailRegExp) || credentials.password.length < 6) {
            setError(true)
        } else {
            try {
                await signIn(credentials.email, credentials.password)
            } catch (e) {
                console.log(e.message)
                setErrorText("Email lub hasło nieprawidłowe")
            }
        }
    }

    return (
        <NavbarStyle>
            <Navbar/>
            <h2>Zaloguj się</h2>
            <img src={require("../../assets/Decoration.png")} alt="decor"/>
            <LoginStyle>
                <form>
                    <p className="error-text">{errorText}</p>
                    <div className="form-group">
                        <label style={{display: "block"}} htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={error && !credentials.email.match(emailRegExp) ? "input-error" : null}
                            value={credentials.email}
                            onFocus={handleFocus}
                            onChange={handleChange}/>
                        <span className={error && !credentials.email.match(emailRegExp) ? "error" : "hidden"}>
                            Podany email jest nieprawidłowy!
                        </span>
                    </div>
                    <div className="form-group">
                        <label style={{display: "block"}} htmlFor="password">Hasło</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={error && credentials.password.length < 6 ? "input-error" : null}
                            value={credentials.password}
                            onFocus={handleFocus}
                            onChange={handleChange}/>
                        <span className={error && credentials.password.length < 6 ? "error" : "hidden"}>
                            Podane hasło jest za krótkie!
                        </span>
                    </div>
                </form>
                <div className="buttons">
                    <button><Link to="/register">Załóż konto</Link></button>
                    <button onClick={handleLogin}><Link>Zaloguj się</Link></button>
                </div>
            </LoginStyle>
        </NavbarStyle>
    )
}