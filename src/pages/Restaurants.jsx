import React from 'react'
import RestaurantCard from '../Components/Card/RestaurantCard'
import { useRestaurantsDetails } from '../Context/Restaurants'

export default function Restaurants() {

  const { data } = useRestaurantsDetails();

  return (
    <div className='container'>
        <div className='container-fluid py-5'>
          <h1 className='mb-3'>Hello, user!</h1>
          {
            data.map((restaurant, index) => {
              return <RestaurantCard key={`${restaurant.name}-${index}`} data={restaurant} />
            })}
        </div>
    </div>
  )
}
