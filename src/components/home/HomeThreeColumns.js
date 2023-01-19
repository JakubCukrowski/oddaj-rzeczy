import React from "react";
import {InfoContainer} from "../styles/homeStyles/InfoContainer.style";
import {SimpleSteps} from "../styles/homeStyles/SimpleSteps.style";
import {FourSteps} from "../styles/homeStyles/FourSteps.style";
import {Link} from "react-router-dom";

const HomeThreeColumns = () => {
    return (
        <section id="three-columns">
            <InfoContainer>
                <div>
                    <h2>
                        10
                    </h2>
                    <p>Oddanych worków</p>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </span>
                </div>
                <div>
                    <h2>
                        5
                    </h2>
                    <p>Wspartych organizacji</p>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </span>
                </div>
                <div>
                    <h2>
                        7
                    </h2>
                    <p>Zorganizowanych zbiórek</p>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </span>
                </div>
            </InfoContainer>
            <SimpleSteps>
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={require("../../assets/Decoration.png")} alt="decor"/>
            </SimpleSteps>
            <FourSteps>
                <div>
                    <img src={require('../../assets/Icon-1.png')} alt="t-shirt"/>
                    <h4>Wybierz rzeczy</h4>
                    <p>ubrania, zabawki,<br/> sprzęt i inne</p>
                </div>
                <div>
                    <img src={require('../../assets/Icon-2.png')} alt="bag"/>
                    <h4>Spakuj je</h4>
                    <p>skorzystaj z<br/> worków na śmieci</p>
                </div>
                <div>
                    <img src={require('../../assets/Icon-3.png')} alt="magnifying glass"/>
                    <h4>Zdecyduj komu<br/> chcesz pomóc</h4>
                    <p>wybierz zaufane<br/> miejsce</p>
                </div>
                <div>
                    <img src={require('../../assets/Icon-4.png')} alt="loading"/>
                    <h4>Zamów kuriera</h4>
                    <p>kurier przyjedzie<br/> w dogodnym terminie</p>
                </div>
            </FourSteps>
            <button><Link to="/login">ODDAJ<br/>RZECZY</Link></button>
        </section>
    )
}

export default HomeThreeColumns