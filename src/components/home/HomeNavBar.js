import React from "react";
import {Link as ScrollLink} from "react-scroll";
import {Menu} from "../styles/Menu.style";
import {GlobalStyles} from "../styles/GlobalStyles";
import {Link, NavLink} from "react-router-dom";
import {Login} from "../login/Login";
import {Register} from "../Register/Register"
import {useLocation, useNavigate} from "react-router";
import * as Scroll from "react-scroll";

export const HomeNavBar = () => {
    const path = useLocation().pathname
    const location = path.split("/")[1]
    const navigate = useNavigate()
    const scroller = Scroll.scroller

    const goToPageAndScroll = async (selector) => {
        await navigate("/")
        await scroller.scrollTo(selector, {
            duration: 500,
            smooth: true,
            offset: 50,
            spy: true
        })
    }

    console.log(location)

    return (
        <>
            <GlobalStyles/>
            <nav>
                <ul style={{marginBottom: 25}} className="nav-btns-container">
                    <li><Link to="/login" element={<Login/>}>Zaloguj</Link></li>
                    <li><Link to="/register" element={<Register/>}>Załóż konto</Link></li>
                </ul>
                <Menu>
                    {location === "" ?
                        <>
                            <li>
                                <ScrollLink activeClass="active"
                                            to="hero"
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}>
                                    Start
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink activeClass="active"
                                            to="three-columns"
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}>
                                    O co chodzi?
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}>
                                    O nas
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink activeClass="active"
                                            to="organizations"
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}>
                                    Fundacja i organizacje
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink activeClass="active"
                                            to="contact"
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}>
                                    Kontakt
                                </ScrollLink>
                            </li>
                        </>
                        : <>
                            <li>
                                <button onClick={() => goToPageAndScroll("hero")}>Start</button>
                            </li>
                            <li>
                                <button onClick={() => goToPageAndScroll("three-columns")}>O co chodzi?</button>
                            </li>
                            <li>
                                <button onClick={() => goToPageAndScroll("about")}>O nas</button>
                            </li>
                            <li>
                                <button onClick={() => goToPageAndScroll("organizations")}>Fundacja i organizacja</button>
                            </li>
                            <li>
                                <button onClick={() => goToPageAndScroll("contact")}>Kontakt</button>
                            </li>
                        </>}
                </Menu>
            </nav>
        </>
    )
}