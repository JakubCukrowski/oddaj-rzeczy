import React from "react";

export const PageOne = ({setItems, selectedItem, error}) => {

    return (
        <>
            <h3>Krok 1/4</h3>
            <span>Zaznacz co chcesz oddać:</span>
            <span className="error">{error === false ? null : "Musisz coś oddać"}</span>
            <div className="inputs-group">
                <div className="radio">
                    <input
                        type="radio"
                        id="usedClothes"
                        name="choose"
                        onChange={setItems}
                        checked={selectedItem === "ubrania, które nadają się do ponownego użytku"}
                        value={"ubrania, które nadają się do ponownego użytku"}/>
                    <label htmlFor="usedClothes">ubrania, które nadają się do ponownego użytku</label>
                </div>
                <div className="radio">
                    <input
                        type="radio"
                        id="trashClothes"
                        name="choose"
                        onChange={setItems}
                        value={"ubrania, do wyrzucenia"}
                        checked={selectedItem === "ubrania, do wyrzucenia"}/>
                    <label htmlFor="trashClothes">ubrania, do wyrzucenia</label>
                </div>
                <div className="radio">
                    <input
                        type="radio"
                        id="toys"
                        name="choose"
                        onChange={setItems}
                        value={"zabawki"}
                        checked={selectedItem === "zabawki"}/>
                    <label htmlFor="toys">zabawki</label>
                </div>
                <div className="radio">
                    <input
                        type="radio"
                        id="books"
                        name="choose"
                        onChange={setItems}
                        value={"książki"}
                        checked={selectedItem === "książki"}/>
                    <label htmlFor="books">książki</label>
                </div>
                <div className="radio">
                    <input
                        type="radio"
                        id="others"
                        name="choose"
                        onChange={setItems}
                        value={"inne"}
                        checked={selectedItem === "inne"}/>
                    <label htmlFor="others">inne</label>
                </div>
            </div>
        </>
    )
}