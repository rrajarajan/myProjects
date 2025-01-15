import React from 'react'
import  {Nav, Navbar, Container} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';

const header = () => {
  return (
    <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect >
                <Container>
                {/* <LinkContainer to="/cart">
                    <Nav.Link>TEMP</Nav.Link>
                </LinkContainer> */}
                    <Nav.Link href='/'>
                        <Navbar.Brand>
                                <img src={logo} alt='ProShop' />
                                Proshop</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-nabar-nav' />
                    </Nav.Link>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/cart'>
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                            <Nav.Link href='/login'>
                                <FaUser /> Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
  )
}

export default header