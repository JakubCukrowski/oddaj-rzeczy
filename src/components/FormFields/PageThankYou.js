import React from "react";

export const PageThankYou = () => {

    return (
        <div className="thank-you-container">
            <p>
                Dziękujemy za przesłanie formularza.
                <br /> Na maila prześlemy wszelkie <br /> informacje o odbiorze
            </p>
            <img src={require("../../assets/Decoration.png")} alt="decor" />
        </div>
    )
}