import React from 'react'
import ProductCard from '../Components/Card/Card'
import ProductLister from '../Components/ListItem/ProductLister'
import { useProducts } from '../Context/Products.context'

export default function Shop() {
  const {data =[]} = useProducts();
  return (
    <div className='container'>
      <h1 className='py-5'>Welcome! Vishnu</h1>
      <ProductLister data={data} />
    </div>
  )
}
