import React from "react";
import {HeroContent} from "../styles/HeroContent.style";
import {HomeNavBar} from "./HomeNavBar";
import {HeroContainer} from "../styles/HeroContainer.style";


const HomeHero = () => {
    return (
        <section id="hero">
            <HeroContainer>
                <HomeNavBar/>
                <HeroContent>
                    <h1>Zacznij Pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img style={{margin: "0 auto"}} src={require('../../assets/Decoration.png')} alt="decor"/>
                    <div>
                        <button>ODDAJ<br></br> RZECZY</button>
                        <button>ZORGANIZUJ<br></br> ZBIÓRKĘ</button>
                    </div>
                </HeroContent>
            </HeroContainer>
        </section>
    )
}

export default HomeHero