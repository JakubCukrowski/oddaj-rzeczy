import React from "react";

export const PageFour = ({ handleChange, street, city, zipCode, phoneNumber, date, time, comments, error }) => {

    return (
        <>
            <h3>Krok 4/4</h3>
            <span>Podaj adres oraz termin odbioru rzeczy przez kuriera</span>
            <span className="error">{error === true ? "Wypełnij pola oznaczone gwiazdką" : null}</span>
            <div className="form-two-groups">
                <form action="">
                    <p>Adres odbioru:</p>
                    <div className="form-summary-container">
                        <div className="form-summary-input-group">
                            <label htmlFor="street">Ulica</label>
                            <span className="error">{error === true && street === "" ? "*" : null}</span>
                            <input type="text" id="street" name="street" onChange={handleChange} value={street}/>
                        </div>
                        <div className="form-summary-input-group">
                            <label htmlFor="city">Miasto</label>
                            <span className="error">{error === true && city === "" ? "*" : null}</span>
                            <input type="text" id="city" name="city" onChange={handleChange} value={city}/>
                        </div>
                        <div className="form-summary-input-group">
                            <label htmlFor="zipCode">Kod <br/> pocztowy</label>
                            <span className="error">{error === true && zipCode === "" ? "*" : null}</span>
                            <input type="text" id="zipCode" name="zipCode" onChange={handleChange} value={zipCode}/>
                        </div>
                        <div className="form-summary-input-group">
                            <label htmlFor="phoneNumber">Numer <br/> telefonu</label>
                            <span className="error">{error === true && phoneNumber === "" ? "*" : null}</span>
                            <input type="number" id="phoneNumber" name="phoneNumber" onChange={handleChange} value={phoneNumber}/>
                        </div>
                    </div>
                </form>
                <form action="">
                    <p>Termin odbioru:</p>
                    <div className="form-summary-container">
                        <div className="form-summary-input-group">
                            <label htmlFor="street">Data</label>
                            <span className="error">{error === true && date === "" ? "*" : null}</span>
                            <input type="date" id="date" name="date" onChange={handleChange} value={date}/>
                        </div>
                        <div className="form-summary-input-group">
                            <label htmlFor="city">Godzina</label>
                            <span className="error">{error === true && time === "" ? "*" : null}</span>
                            <input type="time" id="time" name="time" onChange={handleChange} value={time}/>
                        </div>
                        <div className="form-summary-input-group">
                            <label htmlFor="comments">Uwagi <br/> dla kuriera</label>
                            <textarea name="comments" id="comments" onChange={handleChange} value={comments}></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}