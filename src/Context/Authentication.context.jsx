import React, { createContext, useContext, useEffect, useState } from 'react'
import { useJwt } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
    token: null,
    loggedIn: false,
    loading: false,
    error: null,
    setLoggedIn: () => {},
    logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

export default function AuthenticationContextProvider({ children }) {
    const navigator = useNavigate()
    let _decoded = useJwt(window.localStorage.getItem('_tk'));
    const {isExpired, decodedToken, reEvaluateToken} = _decoded;
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!loggedIn) {
            setLoggedIn(true)
        }
        if(isExpired) {
            window.localStorage.clear();
            setLoggedIn(false)
            navigator('/')
        }
    }, [isExpired, decodedToken]);

    function logout() {
        // Remove localstorage
        window.localStorage.clear();
        // Reset the login state
        setLoggedIn(false);
        // reset error
        setError(null);
        // Reset DecodedToken
        _decoded = null;
        // Redirect
        navigator('/');
    }

    return (
        <AuthContext.Provider value={{ loggedIn, loading, error, setLoggedIn, token: decodedToken, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
