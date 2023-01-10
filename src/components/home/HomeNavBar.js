import React from "react";
import {Link} from "react-scroll";
import {Menu} from "../styles/Menu.style";
import {GlobalStyles} from "../styles/GlobalStyles";

export const HomeNavBar = () => {
    return (
        <>
            <GlobalStyles/>
            <nav>
                <div className="nav-btns-container">
                    <button>Zaloguj</button>
                    <button>Załóż konto</button>
                </div>
                <Menu>
                    <li>
                        <Link activeClass="active"
                              to="hero"
                              spy={true}
                              smooth={true}
                              offset={50}
                              duration={500}>
                            Start
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="three-columns"
                              spy={true}
                              smooth={true}
                              offset={50}
                              duration={500}>
                            O co chodzi?
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="about"
                              spy={true}
                              smooth={true}
                              offset={50}
                              duration={500}>
                            O nas
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="hero"
                              spy={true}
                              smooth={true}
                              offset={50}
                              duration={500}>
                            Fundacja i organizacje
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="hero"
                              spy={true}
                              smooth={true}
                              offset={50}
                              duration={500}>
                            Kontakt
                        </Link>
                    </li>
                </Menu>
            </nav>
        </>
    )
}