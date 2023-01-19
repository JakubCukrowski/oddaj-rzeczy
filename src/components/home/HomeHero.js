import React from "react";
import {HeroContent} from "../styles/homeStyles/HeroContent.style";
import {Navbar} from "../Navbar/Navbar";
import {HeroContainer} from "../styles/homeStyles/HeroContainer.style";
import {Link} from "react-router-dom";


const HomeHero = () => {
    return (
        <section id="hero">
            <HeroContainer>
                <Navbar/>
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