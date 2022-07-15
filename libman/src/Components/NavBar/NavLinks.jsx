import React from 'react'
import {
    Nav,
    Navbar,
    Container

} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavLinks() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='shadow-none border-0' />
                <Navbar.Collapse id="responsive-navbar-nav" className=''>
                    <Nav className="me-auto ms-auto">
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/">HOME</NavLink>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/best-sellers">best sellers</NavLink>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/:id/favourite">favourites</NavLink>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/:id/wishlist">wishlist</NavLink>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/:id/cart">cart</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavLinks