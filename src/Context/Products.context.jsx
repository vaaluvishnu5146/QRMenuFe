import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext({
    data: [],
    loading: false,
    error: null
});

export const useProducts = () => useContext(ProductContext);

export default function ProductsContextProvider({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchProducts() {
        try {
            const response = await fetch('http://localhost:3000/v1/foods/');
            const result = await response.json();
            
            if(result.success) {
                setData(result.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ data, loading, error }}>
            {children}
        </ProductContext.Provider>
    )
}
