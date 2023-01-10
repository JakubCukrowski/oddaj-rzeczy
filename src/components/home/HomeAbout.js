import React from "react";
import {About} from "../styles/About.style";

const HomeAbout = () => {
    return (
        <About id="about">
            <div>
                <h2>O nas</h2>
                <img src={require("../../assets/Decoration.png")} alt="decor"/>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <div>
                    <img src={require('../../assets/Signature.png')} alt="signature"/>
                </div>
            </div>
            <div className="people-img">

            </div>
        </About>
    )
}

export default HomeAbout