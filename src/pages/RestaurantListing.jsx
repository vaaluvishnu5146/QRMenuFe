import React, { useEffect } from 'react'
import ProductCard from '../Components/Card/Card'
import ProductLister from '../Components/ListItem/ProductLister'
import { useProducts } from '../Context/Products.context'
import { useParams } from 'react-router-dom'

export default function RestaurantListing() {
  const {data =[], fetchProducts} = useProducts();
  const { restaurantId } = useParams();

  useEffect(() => {
    if(restaurantId) {
        fetchProducts(restaurantId)
    }
  }, [restaurantId]);

  return (
    <div className='container'>
      <ProductLister data={data} />
    </div>
  )
}
