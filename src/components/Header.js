import React from "react";
import {Navbar, Nav} from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Policies">Policies</Nav.Link>
                    <Nav.Link href="/SellerProfile">Seller Profile</Nav.Link>
                    <Nav.Link href="/SellerDetails">Seller Details</Nav.Link>
                    <Nav.Link href="/SellerProfileEdit">SellerProfileEdit</Nav.Link>
                    <Nav.Link href="/startwork">Start Work</Nav.Link>
                    <Nav.Link href="/buyerdashboard">Buyer Dashboard</Nav.Link>
                    <Nav.Link href="/editprofile">Seller Dashboard</Nav.Link>
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;