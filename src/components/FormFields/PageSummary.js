import React from "react";

export const PageSummary = ({comments,
                                city,
                                zipCode,
                                date,
                                time,
                                street,
                                phoneNumber,
                                bagsCount,
                                items,
                                whom,
                                localization}) => {

    
                                    
    return (
        <>
            <span className="summary">Podsumowanie Twojej darowizny</span>
            <p>Oddajesz:</p>
            <div>
                <div className={"flex-container"}>
                    <img src={require("../../assets/Icon-1.png")} alt="t-shirt"/>
                    <p>{bagsCount} {bagsCount > 1 ? "worki" : "worek"}, {items}, {whom}</p>
                </div>
                <div className={"flex-container"}>
                    <img src={require('../../assets/Icon-4.png')} alt="reload"/>
                    <p>Dla lokalizacji: {localization}</p>
                </div>
            </div>
            <div className="form-two-groups">
                <div>
                    <p>Adres odbioru:</p>
                    <div className="form-summary-container">
                        <div className="form-summary-input-group">
                            <p>Ulica</p>
                            <p>{street}</p>
                        </div>
                        <div className="form-summary-input-group">
                            <p>Miasto</p>
                            <p>{city}</p>
                        </div>
                        <div className="form-summary-input-group">
                            <p>Kod <br/> pocztowy</p>
                            <p>{zipCode}</p>
                        </div>
                        <div className="form-summary-input-group">
                            <p>Numer <br/> telefonu</p>
                            <p>{phoneNumber}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Termin odbioru:</p>
                    <div className="form-summary-container">
                        <div className="form-summary-input-group">
                            <p>Data</p>
                            <p>{date}</p>
                        </div>
                        <div className="form-summary-input-group">
                            <p>Godzina</p>
                            <p>{time}</p>
                        </div>
                        <div className="form-summary-input-group">
                            <label htmlFor="comments">Uwagi <br/> dla kuriera</label>
                            <p>{comments}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}