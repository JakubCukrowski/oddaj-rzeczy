import React from "react";
import {HomeNavBar} from "../home/HomeNavBar";
import {NavbarStyle} from "../styles/Navbar.style";
import {Link} from "react-router-dom";
import {LoginStyle} from "../styles/Login.style";

export const Login = () => {
    return (
        <NavbarStyle>
            <HomeNavBar/>
            <h2>Zaloguj się</h2>
            <img src={require("../../assets/Decoration.png")} alt="decor"/>
            <LoginStyle>
                <form>
                    <div>
                        <label style={{display: "block"}} htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <div>
                        <label style={{display: "block"}} htmlFor="password">Hasło</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                </form>
                <div className="buttons">
                    <button><Link to="/register">Załóż konto</Link></button>
                    <button><Link>Zaloguj się</Link></button>
                </div>
            </LoginStyle>
        </NavbarStyle>
    )
}