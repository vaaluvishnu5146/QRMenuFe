import React, { createContext, useContext, useEffect, useState } from 'react'
import { useJwt } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
    token: null,
    loggedIn: false,
    loading: false,
    error: null,
    setLoggedIn: () => {}
});

export const useAuth = () => useContext(AuthContext);

export default function AuthenticationContextProvider({ children }) {
    const navigator = useNavigate()
    const {isExpired, decodedToken, reEvaluateToken} = useJwt(window.localStorage.getItem('_tk'))
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

    return (
        <AuthContext.Provider value={{ loggedIn, loading, error, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
