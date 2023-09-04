import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';

const Main = () => {
    return (<>
        <Navbar expand="lg" className="bg-body-tertiary bg-dark mb-5">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    ></Nav>
                    <Nav className="me-auto ">
                        <Link className='text-dark text-decoration-none mx-2' to="/">Login</Link>
                        <Link className='text-dark text-decoration-none mx-2' to="/registration">Registration</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/registration' element={<Registration />} />

        </Routes>
    </>

    )
}

export default Main
