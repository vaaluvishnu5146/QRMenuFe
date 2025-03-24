import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export default function NavigationC() {
    return (
        <Navbar
            color="secondary"
            dark
        >
            <NavbarBrand href="/">
                QRMenu
            </NavbarBrand>
        </Navbar>
    )
}
