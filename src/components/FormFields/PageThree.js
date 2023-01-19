import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

export const PageThree = ({
    localization, 
    status,
    selectStatus, 
    onClick, 
    receivers, 
    handleReceivers, 
    error, 
    searchWord,
    onChange, 
    searchWordSet,
    organizations}) => {
    
    
    return (
        <>
            <h3>Krok 3/4</h3>
            <span>Lokalizacja:</span>
            <span className="error">{error === true && localization === "-wybierz-" ? "Wybierz lokalizację" : null}</span>
            <div className="dropdown-menu">
                <div className="locations">
                    <div onClick={selectStatus} className="dropdown-select city">
                        <p>{localization}</p>
                        <FontAwesomeIcon icon={status ? faChevronUp : faChevronDown}/>
                    </div>
                    <div onClick={onClick} className={status ? "dropdown-options cities" : "hidden"}>
                        <div id="optionOne">Poznań</div>
                        <div id="optionTwo">Warszawa</div>
                        <div id="optionThree">Kraków</div>
                        <div id="optionFive">Wrocław</div>
                        <div id="optionFour">Katowice</div>
                    </div>
                </div>
            </div>
            <span>Komu chcesz pomóc?</span>
            <span className="error">{error === true && receivers === "" ? "Wybierz komu chcesz pomóc" :  null}</span>
            <div className="category-buttons">
                <button onClick={handleReceivers}
                        id="children"
                        className={receivers === "dzieciom" ? "selected" : null}>
                    dzieciom
                </button>
                <button onClick={handleReceivers}
                        id="single-mothers"
                        className={receivers === "samotnym matkom" ? "selected" : null}
                >samotnym matkom
                </button>
                <button id="homeless" onClick={handleReceivers} className={receivers === "bezdomnym" ? "selected" : null}>
                    bezdomnym
                </button>
                <button onClick={handleReceivers}
                        id="disabled-people"
                        className={receivers === "niepełnosprawnym" ? "selected" : null}
                >niepełnosprawnym
                </button>
                <button id="elder-people" onClick={handleReceivers} className={receivers === "osobom starszym" ? "selected" : null}>
                    osobom starszym

                </button>
            </div>
            <div className="inputs-group pageThree">
                <label htmlFor="organizationName">Wpisz nazwę konkretnej organizacji(opcjonalnie)</label>
                <input type="text" id="organizationName" onChange={onChange} value={searchWord} autoComplete="off"/>
                <div className={searchWord === "" ? "hidden" : "search-result"}>
                    {organizations.length === 0 
                    ? "(brak wyników)" 
                    : organizations.map((organization, index) => {
                        return <div style={{cursor: "pointer"}} key={index} onClick={searchWordSet}>{organization.name}</div>
                    })}
                </div>
            </div>
        </>
    )
}