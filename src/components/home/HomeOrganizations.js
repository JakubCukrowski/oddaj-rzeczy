import React, {useEffect, useState} from "react";
import {Organizations} from "../styles/homeStyles/Organizations.style";
import {FScontainerStyle} from "../styles/homeStyles/FScontainer.style";
import { UserAuth } from "../../context/AuthContext";

const HomeOrganizations = () => {
    const [filteredOrganizations, setFilteredOrganizations] = useState([])
    const [type, setType] = useState("foundation")
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)
    const {organizations} = UserAuth() 

    useEffect(() => {
        setFilteredOrganizations(organizations.filter(organization => organization.type === type))
    }, [type, organizations])

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIntex = lastPostIndex - postsPerPage
    const slicedOrganizations = filteredOrganizations.slice(firstPostIntex, lastPostIndex)
    const pages = []

    for (let i = 1; i <= Math.ceil(filteredOrganizations.length / postsPerPage); i++) {
        pages.push(i)
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.id === "foundations") setType("foundation")
        if (e.target.id === "non-governments") setType("non-government")
        if (e.target.id === "local") setType("local")
        setCurrentPage(1)
    }


    const showText = () => {
        if (type === "foundation") {
            return <p className="desc">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>

        } else if (type === "non-govenrment") {
            return <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A aliquid at aut culpa debitis eligendi ex facere in ipsam, odio optio.
            </p>
        } else {
            return <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus aspernatur culpa cumque doloremque facilis inventore maiores quam quas.
            </p>
        }
    }

    return (
        <Organizations id="organizations">
            <h2>Komu Pomagamy?</h2>
            <img src={require("../../assets/Decoration.png")} alt="decor"/>
            <div className="btn-container">
                <button
                    onClick={handleClick}
                    className={type === "foundation" ? "active" : "deactive"}
                    id="foundations">
                    Fundacjom
                </button>
                <button
                    onClick={handleClick}
                    id="non-governments"
                    className={type === "non-government" ? "active" : "deactive"}>
                    Organizacjom<br/> pozarządowym
                </button>
                <button
                    onClick={handleClick}
                    id="local"
                    className={type === "local" ? "active" : "deactive"}>
                    Lokalnym<br/> zbiórkom
                </button>
            </div>
            {showText()}
            {slicedOrganizations.map((organization, index) => {
                return (
                    <FScontainerStyle key={index}>
                        <div>
                            <h3>{organization.name}</h3>
                            <p>{organization.desc}</p>
                        </div>
                        <p>{organization.items.join(", ")}</p>
                    </FScontainerStyle>
                )
            })}
            <div className="pagination-btns">
                {pages.map((page, index) =>
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : "deactive"}>
                        {page}
                    </button>)}
            </div>
        </Organizations>
    )
}

export default HomeOrganizations