import React from "react";
import HomeHero from "./HomeHero";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAbout from "./HomeAbout";
import HomeOrganizations from "./HomeOrganizations";
import HomeContact from "./HomeContact";


const Home = () => {
    return (
        <>
            <HomeHero/>
            <HomeThreeColumns/>
            <HomeAbout/>
            <HomeOrganizations/>
            <HomeContact/>
        </>
    )
}

export default Home