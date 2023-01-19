import React, {useEffect, useState} from "react";
import {FormFieldsStyle, TopBar} from "../styles/FormFields.style";
import {PageOne} from "./PageOne";
import {PageTwo} from "./PageTwo";
import {PageThree} from "./PageThree";
import {PageFour} from "./PageFour";
import {PageSummary} from "./PageSummary";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../Firebase.config";

export const FormFields = () => {
    const [page, setPage] = useState(0)
    const [error, setError] = useState(false)
    const [status, setStatus] = useState(false)
    const [details, setDetails] = useState({
        items: "",
        bagsCount: "-wybierz-",
        localization: "-wybierz-",
        receivers: "",
        aspect: "",
        organizationName: "",
        street: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
        date: "",
        time: "",
        comments: ""
    })
    const [organizations, setOrganizations] = useState([])
    const [searchWord, setSearchWord] = useState("")
    const organizationsRef = collection(db, "organizations")

    const handleChange = (e) => {
        const {name, value} = e.target
        setDetails(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    /////////// PAGE ONE

    const handleRadio = (e) => {
        setDetails(prevState => {
            return {
                ...prevState,
                items: e.target.value
            }
        })
        setError(false)
    }

    //////////// PAGE TWO
    const handleBags = (e) => {
        setDetails(prevState => {
            return {
                ...prevState,
                bagsCount: e.target.textContent
            }
        })
        setStatus(false)
        setError(false)
    }

    const handleStatus = () => {
        setStatus(prevState => !prevState)
    }

    //////////PAGE THREE
    useEffect(() => {
        const getOrganizations = async () => {
            const data = await getDocs(organizationsRef)
            const foundations = data.docs.map(doc => ({...doc.data()})).filter(doc => doc.type === "foundation")
            const filteredFoundations = foundations.filter(foundation => foundation.location.includes(details.localization))
                .filter(foundation => foundation.target === details.aspect)
            const newFilter = filteredFoundations.filter(foundation => foundation.name.includes(searchWord))
            setOrganizations(newFilter)
        }

        getOrganizations()
    }, [details.localization, details.aspect, searchWord])

    const handleFilter = async (e) => {
        if (details.receivers === "" || details.localization === "") {
            return null

        } else {
            setSearchWord(e.target.value)
        }
    }

    const handleLocalization = (e) => {
        setDetails(prevState => {
            return {
                ...prevState,
                localization: e.target.innerText
            }
        })
        setStatus(false)
    }

    const searchWordSetting = (e) => {
        setSearchWord(e.target.textContent)
    }

    const selectReceivers = (e) => {
        setDetails(prevState => {
            return {
                ...prevState,
                receivers: e.target.innerText,
                aspect: e.target.id
            }
        })
    }

    const validatePageOne = () => {
        if (details.items === "") {
            setError(true)

        } else {
            setPage(prevState => prevState + 1)
        }
    }

    const validatePageTwo = () => {
        if (details.bagsCount === "-wybierz-") {
            setError(true)

        } else {
            setPage(prevState => prevState + 1)
        }
    }

    const validatePageThree = () => {
        if (details.receivers === "" || details.localization === "") {
            setError(true)

        } else {
            setPage(prevState => prevState + 1)
        }
    }

    const validatePageFour = () => {
        if (details.street === "" || details.city === "" || details.phoneNumber === "" || details.zipCode === ""
            || details.time === "" || details.date === "") {
            setError(true)

        } else {
            setPage(prevState => prevState + 1)
        }
    }

    const validateSummary = (e) => {
        e.preventDefault()

    }

    const previousPage = (e) => {
        e.preventDefault()
        setPage(prevState => prevState - 1)
        setError(false)
    }

    const pageDisplay = () => {
        if (page === 0) {
            return (
                <>
                    <PageOne setItems={handleRadio} selectedItem={details.items} error={error}/>
                    <div className="buttons-field">
                        <button onClick={validatePageOne}>
                            Dalej
                        </button>
                    </div>
                </>
            )
        } else if (page === 1) {
            return (
                <>
                    <PageTwo
                        numberOfBags={details.bagsCount}
                        status={status}
                        onClick={handleBags}
                        error={error}
                        selectStatus={handleStatus}/>
                    <div className="buttons-field">
                        <button onClick={previousPage}>Wstecz</button>
                        <button onClick={validatePageTwo}>Dalej</button>
                    </div>
                </>
                )

        } else if (page === 2) {
            return (
                <>
                    <PageThree
                        selectStatus={handleStatus}
                        aspect={details.aspect}
                        onChange={handleFilter}
                        organizations={organizations}
                        searchWord={searchWord}
                        status={status}
                        error={error}
                        searchWordSet={searchWordSetting}
                        onClick={handleLocalization}
                        handleReceivers={selectReceivers}
                        receivers={details.receivers}
                        localization={details.localization}/>
                    <div className="buttons-field">
                        <button onClick={previousPage}>Wstecz</button>
                        <button onClick={validatePageThree}>Dalej</button>
                    </div>
                </>
            )
        } else if (page === 3) {
            return (
                <>
                    <PageFour
                        city={details.city}
                        date={details.date}
                        time={details.time}
                        phoneNumber={details.phoneNumber}
                        zipCode={details.zipCode}
                        street={details.street}
                        handleChange={handleChange}
                        error={error}
                        comments={details.comments}/>
                    <div className="buttons-field">
                        <button onClick={previousPage}>Wstecz</button>
                        <button onClick={validatePageFour}>Dalej</button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <PageSummary
                        city={details.city}
                        date={details.date}
                        time={details.time}
                        phoneNumber={details.phoneNumber}
                        zipCode={details.zipCode}
                        street={details.street}
                        bagsCount={details.bagsCount}
                        items={details.items}
                        whom={details.receivers}
                        localization={details.localization}
                        comments={details.comments}/>
                    <div className="buttons-field">
                        <button onClick={previousPage}>Wstecz</button>
                        <button onClick={validateSummary}>Potwierdzam</button>
                    </div>
                </>
            )
        }
    }

    const topBarDesc = () => {
        if (page === 0) {
            return <p>
                Uzupełnij szczegóły dotyczące Twoich rzeczy.
                Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
            </p>
        } else if (page === 1) {
            return <p>
                Wszystkie rzeczy do oddania zapakuj w 60l worki.
                Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.
            </p>
        } else if (page === 2) {
            return <p>
                Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.
                Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
            </p>
        } else if (page === 3) {
            return <p>
                Podaj adres oraz termin odbioru rzeczy.
            </p>
        } else {
            return <PageSummary/>
        }
    }

    return (
        <>
            <TopBar>
                {page < 4
                    ? <div className="container">
                    <h2>Ważne!</h2>
                    {topBarDesc()}
                </div>
                    : null}
            </TopBar>
            <FormFieldsStyle>
                <div className="container">
                    {pageDisplay()}

                </div>
            </FormFieldsStyle>
        </>
    )
}