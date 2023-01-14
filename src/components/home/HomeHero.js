import React from "react";
import {HeroContent} from "../styles/HeroContent.style";
import {HomeNavBar} from "./HomeNavBar";
import {HeroContainer} from "../styles/HeroContainer.style";
import {Link} from "react-router-dom";


const HomeHero = () => {
    return (
        <section id="hero">
            <HeroContainer>
                <HomeNavBar/>
                <HeroContent>
                    <h1>Zacznij Pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img style={{margin: "0 auto"}} src={require('../../assets/Decoration.png')} alt="decor"/>
                    <ul className="hero-buttons">
                        <li><Link to="login">ODDAJ<br></br> RZECZY</Link></li>
                        <li><Link to="login">ZORGANIZUJ<br></br> ZBIÓRKĘ</Link></li>
                    </ul>
                </HeroContent>
            </HeroContainer>
        </section>
    )
}

export default HomeHero