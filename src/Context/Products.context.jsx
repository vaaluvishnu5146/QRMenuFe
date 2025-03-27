import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './Authentication.context';

const ProductContext = createContext({
    data: [],
    loading: false,
    error: null,
    fetchProducts: () => {},
    refetchProducts: () => {}
});

export const useProducts = () => useContext(ProductContext);

export default function ProductsContextProvider({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {token} = useAuth()


    async function fetchProducts(restId) {
        try {
            let response = null;
            if(token && token.role === "admin" && token.restaurant) {
                response = await fetch(`http://localhost:3000/v1/foods/restaurant/${token.restaurant}`)
            }
            else {
                response = await fetch(`http://localhost:3000/v1/foods/restaurant/${restId}`);
            }
            
            const result = await response.json();
            
            if(result.success) {
                setData(result.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(token) {
            fetchProducts();
        }
    }, [token]);
    
    function refetchProducts() {
        fetchProducts();
    }

    return (
        <ProductContext.Provider value={{ data, loading, error, fetchProducts, refetchProducts }}>
            {children}
        </ProductContext.Provider>
    )
}
