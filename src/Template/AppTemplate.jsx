import React from 'react'
import NavigationC from '../Components/Navbar/navbar'

export default function AppTemplate({ children }) {
  return (
    <>
    <NavigationC />
    {children}
    </>
  )
}
