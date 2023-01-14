import React from "react";
import {Layout} from "./components/Layout/Layout";
import {Route, Routes} from "react-router";
import {Login} from "./components/login/Login";
import {Register} from "./components/Register/Register";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
        </Routes>
    )
}

export default App;
