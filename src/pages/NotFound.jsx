import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/', {state: "Error Not Page"}) //'path', {replace}, {state} or (-x) to go back x times
        }, 1000);
    }, [])
    return(
        <>
            <h1>Not Found</h1>
            {/* <Navigate to="/" /> */}
        </>
        
    );
}

export default NotFound;