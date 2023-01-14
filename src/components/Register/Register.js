import React from "react";
import {HomeNavBar} from "../home/HomeNavBar";
import {NavbarStyle} from "../styles/Navbar.style";
import {Link} from "react-router-dom";
import {RegisterStyle} from "../styles/Register.style";

export const Register = () => {
    return (
        <NavbarStyle>
            <HomeNavBar/>
            <h2>Zarejestruj się</h2>
            <img src={require("../../assets/Decoration.png")} alt="decor"/>
            <RegisterStyle>
                <form>
                    <div>
                        <label style={{display: "block"}} htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <div>
                        <label style={{display: "block"}} htmlFor="password">Hasło</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <div>
                        <label style={{display: "block"}} htmlFor="repeat-password">Powtórz hasło</label>
                        <input type="password" id="repeat-password" name="repeat-password"/>
                    </div>
                </form>
                <div className="buttons">
                    <button><Link to="/register">Załóż konto</Link></button>
                    <button><Link>Zaloguj się</Link></button>
                </div>
            </RegisterStyle>
        </NavbarStyle>
    )
}