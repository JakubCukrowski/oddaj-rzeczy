import React, {useState} from "react";
import {Navbar} from "../Navbar/Navbar";
import {NavbarStyle} from "../styles/Navbar.style";
import {Link} from "react-router-dom";
import {RegisterStyle} from "../styles/Register.style";
import {UserAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router";

export const Register = () => {
    const [error, setError] = useState(false)
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        repeatedPassword: ""
    })
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const navigate = useNavigate()
    const {createAccount} = UserAuth()

    const handleCredentials = (e) => {
        const {name, value} = e.target
        setCredentials(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!credentials.email.match(emailRegExp)
            || credentials.password !== credentials.repeatedPassword
            || credentials.password.length < 6) {
            setError(true)
        } else {
            try {
                await createAccount(credentials.email, credentials.password)
                navigate("/")
            } catch (e) {
                console.log(e.message)
            }
        }
    }

    return (
        <NavbarStyle>
            <Navbar/>
            <h2>Zarejestruj się</h2>
            <img src={require("../../assets/Decoration.png")} alt="decor"/>
            <RegisterStyle>
                <form>
                    <div className="register-form-group">
                        <label style={{display: "block"}} htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={credentials.email}
                            className={error && !credentials.email.match(emailRegExp) ? "input-error" : null}
                            onChange={handleCredentials}/>
                        <span className={error && !credentials.email.match(emailRegExp) ? "error" : "hidden"}>
                            Podany email jest niepoprawny!
                        </span>
                    </div>
                    <div className="register-form-group">
                        <label style={{display: "block"}} htmlFor="password">Hasło</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            className={error && credentials.password.length < 6 ? "input-error" : null}
                            onChange={handleCredentials}/>
                        <span className={error && credentials.password.length < 6 ? "error" : "hidden"}>
                            Podane hasło jest za krótkie!
                        </span>
                    </div>
                    <div className="register-form-group">
                        <label style={{display: "block"}} htmlFor="repeatedPassword">Powtórz hasło</label>
                        <input
                            type="password"
                            id="repeatedPassword"
                            name="repeatedPassword"
                            value={credentials.repeatedPassword}
                            className={error && credentials.password !== credentials.repeatedPassword ? "input-error" : null}
                            onChange={handleCredentials}/>
                        <span className={error && credentials.repeatedPassword !== credentials.password ? "error" : "hidden"}>
                            Podane hasła różnią się!
                        </span>
                    </div>
                </form>
                <div className="buttons">
                    <button><Link to="/login">Zaloguj się</Link></button>
                    <button onClick={handleSubmit}><Link>Załóż konto</Link></button>
                </div>
            </RegisterStyle>
        </NavbarStyle>
    )
}