import React from "react";
import {UserAuth} from "../../context/AuthContext";
import {Navigate, useNavigate} from "react-router";

export const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if (user) {
        return <Navigate to="/"/>
    }

    return children
}