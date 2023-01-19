import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

export const PageTwo = ({onClick, numberOfBags, status, selectStatus, error}) => {

    return (
        <>
            <h3>Krok 2/4</h3>
            <span>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>
            <span className="error">{error === false ? null : "Podaj ilość worków"}</span>
            <div className="dropdown-menu">
                <p>Liczba 60l worków:</p>
                <div className="bags">
                    <div onClick={selectStatus} className={"dropdown-select"}>
                        <p>{numberOfBags}</p>
                        <FontAwesomeIcon icon={status ? faChevronUp : faChevronDown}/>
                    </div>
                    <div onClickCapture={onClick} className={status ? "dropdown-options" : "hidden"}>
                        <div id="optionOne">1</div>
                        <div id="optionTwo">2</div>
                        <div id="optionThree">3</div>
                        <div id="optionFour">4</div>
                        <div id="optionFive">5</div>
                    </div>
                </div>
            </div>
        </>
    )
}