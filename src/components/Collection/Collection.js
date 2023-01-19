import React from "react";
import {Navbar} from "../Navbar/Navbar";
import {NavbarStyle} from "../styles/Navbar.style";
import HomeContact from "../home/HomeContact";
import {CollectionStyle} from "../styles/Collection.style";
import {FormFields} from "../FormFields/FormFields";

export const Collection = () => {

    return (
        <section>
            <CollectionStyle>
                <Navbar/>
                <div className="content-container">
                    <h1>Oddaj rzeczy, których już nie chcesz</h1>
                    <span>POTRZEBUJĄCYM</span>
                    <img src={require("../../assets/Decoration.png")} alt="decor"/>
                    <h2>Wystarczą 4 proste kroki:</h2>
                    <div className="squares">
                        <div className="square"><span>1</span> <br/> Wybierz <br/> rzeczy</div>
                        <div className="square"><span>2</span> <br/> Spakuj je <br/> w worki</div>
                        <div className="square"><span>3</span> <br/> Wybierz <br/> fundację</div>
                        <div className="square"><span>4</span> <br/> Zamów <br/> kuriera</div>
                    </div>
                </div>
            </CollectionStyle>
            <FormFields/>
            <HomeContact/>
        </section>


    )
}