import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

// import Auth from '../utils/auth';

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h1>Liquor Management</h1>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header;