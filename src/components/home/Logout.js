import React from "react";
import {NavbarStyle} from "../styles/Navbar.style";
import {Navbar} from "../Navbar/Navbar";
import {useNavigate} from "react-router";


export const Logout = () => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <NavbarStyle>
            <Navbar/>
            <h2>Wylogowanie nastąpiło <br/> pomyślnie.</h2>
            <img src={require("../../assets/Decoration.png")} alt="decor"/>
            <button onClick={handleClick} className={"home-btn"}>Strona główna</button>
        </NavbarStyle>
    )
}