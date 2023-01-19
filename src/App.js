import React from "react";
import {Layout} from "./components/Layout/Layout";
import {Route, Routes} from "react-router";
import {Login} from "./components/login/Login";
import {Register} from "./components/Register/Register";
import {AuthContextProvider} from "./context/AuthContext";
import {Logout} from "./components/home/Logout";
import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute";
import {Collection} from "./components/Collection/Collection";
import {NotFound} from "./components/NotFound/NotFound";

const App = () => {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="login" element={<ProtectedRoute><Login/></ProtectedRoute>}/>
                <Route path="register" element={<ProtectedRoute><Register/></ProtectedRoute>}/>
                <Route path="logout" element={<ProtectedRoute><Logout/></ProtectedRoute>}/>
                <Route path="/oddaj-rzeczy" element={<Collection/>}/>
                <Route path="*" element={<NotFound/>}/>

            </Routes>
        </AuthContextProvider>
    )
}

export default App;
