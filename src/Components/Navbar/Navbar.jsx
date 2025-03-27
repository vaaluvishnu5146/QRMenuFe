import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Navbar } from 'reactstrap'
import { useAuth } from '../../Context/Authentication.context'

export default function NavigationC() {
    const { logout, token } = useAuth()
    return (
        <Navbar
            color="success"
            className='d-flex align-items-center justify-content-between'
        >
            <div>
            <img width={35} src='https://cdn-icons-png.flaticon.com/512/6643/6643359.png' />
            {token && token.role === "customer" && <Link to="/">
                Home
            </Link>}
            </div>
            <div>
            {token && token.role === "admin" && <Link to="/settings">
                Settings
            </Link>}
            {token && token.role === "admin" && <Link to="/createProduct">
                Create Product
            </Link>}
            <Button color='danger' onClick={logout}>
                Logout
            </Button>
            </div>
        </Navbar>
    )
}
