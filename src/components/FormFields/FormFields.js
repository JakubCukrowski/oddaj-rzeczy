import React, {useEffect, useState} from "react";
import {FormFieldsStyle, TopBar} from "../styles/FormFields.style";
import {PageOne} from "./PageOne";
import {PageTwo} from "./PageTwo";
import {PageThree} from "./PageThree";
import {PageFour} from "./PageFour";
import {PageSummary} from "./PageSummary";
import { doc, getDocs, updateDoc, where, query, increment, collection, arrayUnion, getDoc } from "@firebase/firestore";
import { db } from "../../Firebase.config";
import { UserAuth } from "../../context/AuthContext";
import { PageThankYou } from "./PageThankYou";

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
        street: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
        date: "",
        time: "",
        comments: "",
        organizationName: ""
    })
    const [filteredOrganizations, setFilteredOrganizations] = useState([])
    const [searchWord, setSearchWord] = useState("")
    const [selectedId, setSelectedId] = useState("")
    const {organizations, organizationsRef, setOrganizations, user} = UserAuth()
    const [isSelected, setIsSelected] = useState(false)
    const [isIncluded, setIsIncluded] = useState(false)

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
        const filterOrganizationsByType = organizations.filter(organization => organization.type === "foundation")
        const newFilter = filterOrganizationsByType.filter(organization => organization.location.includes(details.localization))
            .filter(organization => organization.target === details.aspect)
            .filter(organization => organization.name.includes(searchWord))
        setFilteredOrganizations(newFilter)
    }, [organizations, details.aspect, details.localization, searchWord])

    const handleFilter = (e) => {
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
        setIsIncluded(false)
    }

    const searchWordSetting = (e) => {
        setSearchWord(e.target.textContent)
        setIsSelected(true)
    }

    const selectReceivers = (e) => {
        setDetails(prevState => {
            return {
                ...prevState,
                receivers: e.target.innerText,
                aspect: e.target.id
            }
        })
        setSearchWord("")
        setIsIncluded(false)
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
        const filterByTarget = filteredOrganizations.filter(organization => organization.target === details.aspect)
        const randomIndex = Math.floor(Math.random() * filterByTarget.length)
        const randomOrganization = filterByTarget[randomIndex]

        if (details.receivers === "" || details.localization === "") {
                setError(true)

        } else if (searchWord === "") {
        
            if (randomOrganization && randomOrganization.location.includes(details.localization) && details.aspect !== "") {
                setDetails(prevState => {
                    return {
                        ...prevState,
                        organizationName: randomOrganization.name
                    }
                })
                setPage(prevState => prevState + 1) 
                setSelectedId(randomOrganization.id)
            } else {
                setIsIncluded(true)
            }     

        } else {
            const filterByName = filteredOrganizations.filter(organization => organization.name === searchWord)
            filterByName.forEach(organization => setSelectedId(organization.id))
            setDetails(prevState => {
                return {
                    ...prevState,
                    organizationName: searchWord
                }
            })
            setError(false)
            setPage(prevState => prevState + 1)
        }
}
          
            

    const validatePageFour = () => {
        if (details.street === "" || details.city === "" || details.phoneNumber === "" || details.zipCode === "" || details.time === "" || details.date === "") {
            setError(true)
        } else {
            setPage(prevState => prevState + 1)
        }
    }

    const validateSummary = async (e) => {
        e.preventDefault()

        const organizationToUpdate = doc(db, "organizations", selectedId)
        const updateUserSupport = doc(db, "users", user.uid)
        await updateDoc(organizationToUpdate, {
        bags: increment(details.bagsCount),
        supported: increment(1)
    })
        await updateDoc(updateUserSupport, {
            support: arrayUnion(details)
        })
        const data = await getDocs(organizationsRef)
        const filteredData = data.docs.map(doc => ({...doc.data(), id: doc.id}))
        setOrganizations(filteredData)
        setPage(prevState => prevState + 1)
        setDetails({
            items: "",
            bagsCount: "-wybierz-",
            localization: "-wybierz-",
            receivers: "",
            aspect: "",
            street: "",
            city: "",
            zipCode: "",
            phoneNumber: "",
            date: "",
            time: "",
            comments: "",
            organizationName: ""
        })
        setSelectedId("")
        
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
                        organizations={filteredOrganizations}
                        searchWord={searchWord}
                        isIncluded={isIncluded}
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
        } else if (page === 4) {
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
        } else {
            return <PageThankYou/>
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