import React, { createContext, useContext, useState } from 'react'

const RestaurantDetailsContext = createContext({
    data: {},
    loading: false,
    error: null,
    fetchRestaurant: () => {}
});

export const useRestaurantDetails = () => useContext(RestaurantDetailsContext);

export default function RestaurantDetailsContextProvider({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchRestaurant(restaurantId = '') {
        try {
            const response = await fetch(`http://localhost:3000/v1/restaurants/${restaurantId}`);
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
        <RestaurantDetailsContext.Provider value={{ data, loading, error, fetchRestaurant }}>
            {children}
        </RestaurantDetailsContext.Provider>
    )
}
