import React, { createContext, useContext, useEffect, useState } from 'react'

const Restaurants = createContext({
    data: {},
    loading: false,
    error: null,
    fetchRestaurants: () => {}
});

export const useRestaurantsDetails = () => useContext(Restaurants);

export default function RestaurantsProvider({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    async function fetchRestaurants() {
        try {
            const response = await fetch(`http://localhost:3000/v1/restaurants/`);
            const result = await response.json();
            
            if(result.success) {
                setData(result.data)
            }

        } catch (error) {
            console.log(error)
            setError(error)
        }
    }

    return (
        <Restaurants.Provider value={{ data, loading, error }}>
            {children}
        </Restaurants.Provider>
    )
}
