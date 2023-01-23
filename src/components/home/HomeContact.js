import React, {useState} from "react";
import {Contact} from "../styles/homeStyles/Contact.style";

const HomeContact = () => {
    const validationAPI = "https://fer-api.coderslab.pl/v1/portfolio/contact"
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [error, setError] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleInput = (e) => {
        const {name, value} = e.target
        setInputs(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputs.name.length < 2 || inputs.message.length < 120 || !inputs.email.match(emailRegExp)) {
            setError(true)
            setSuccessMessage(false)
        }

        if (inputs.name.length > 2 && inputs.message.length >= 120 && inputs.email.match(emailRegExp)) {
            setError(false)
            setSuccessMessage(true)
            fetch(validationAPI, {
                method: "POST",
                body: JSON.stringify(inputs),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))

                setInputs({
                    name: "",
                    message: "",
                    email: ""
                })
        }
    }

    return (
        <Contact id="contact">
            <div className="form-container">
                <h2>Skontaktuj się z nami</h2>
                <img src={require('../../assets/Decoration.png')} alt="decor"/>
                <p className={successMessage ? "success-message" : "hidden"}>
                    Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy.
                </p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input
                                className={error && inputs.name.length < 2 ? "input-error" : null}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Krzysztof"
                                onChange={handleInput}
                                value={inputs.name}/>
                            <span className="error">
                                {error && inputs.name.length < 2 ? "Podane imię jest nieprawidłowe!" : null}
                            </span>
                        </div>
                        <div>
                            <label htmlFor="email">Wpisz swój email</label>
                            <input
                                className={error && inputs.email.match(emailRegExp) < 2 ? "input-error" : null}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="exemplary@mail.com"
                                onChange={handleInput}
                                value={inputs.email}/>
                            <span className={error && !inputs.email.match(emailRegExp)? "error" : "hidden"}>
                                {error && !inputs.email.match(emailRegExp)? "Podany email jest nieprawidłowy!" : null}
                            </span>
                        </div>
                    </div>
                    <div className="textarea-container">
                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea
                            className={error && inputs.message.length < 120 ? "input-error" : null}
                            name="message"
                            id="message"
                            value={inputs.message}
                            onChange={handleInput}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                        </textarea>
                        <span className="error">
                            {error && inputs.message.length < 120 ? "Wiadomość musi mieć conajmniej 120 znaków!" : null}
                        </span>
                    </div>
                    <input type="submit" id="submitBtn" value="Wyślij"/>
                </form>
            </div>
            <div className="footer">
            <span>Copyright by CodersLab</span>
                <div className="footer-images">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img className="fb-img" src={require('../../assets/Facebook.png')} alt="fb"/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <img src={require('../../assets/Instagram.png')} alt="ig"/>
                    </a>
                </div>
            </div>
        </Contact>
    )
}

export default HomeContact