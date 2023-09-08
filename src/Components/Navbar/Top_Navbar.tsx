import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button_Bootstrap, Button_LogOut } from '../Forms-Items/Buttons';
const Top_Navbar = (props: any) => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('Login')
        toast.success("Log-Out")
        navigate('/');
    }
    return (
        <>
                <Navbar expand="lg" className="bg-body-tertiary bg-dark mb-5">
            <Container>
                    <Link className='text-decoration-none' to="/home">
                        <Navbar.Brand>Home</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        ></Nav>
                        <Nav className="me-auto ">
                            {
                                props.Navs.map((i: any,indx:number) => (
                                    <>
                                        <Link className='text-dark text-decoration-none mx-2' to={i.nav} key={indx}>{i.titls}</Link>
                                    </>
                                ))
                            }

                        </Nav>
                              <Button_LogOut variants="outline-secondary" typs="button" title={`Log-Out`} click={logOut} />

                    </Navbar.Collapse>
            </Container>
                </Navbar>
        </>
    )
}

export default Top_Navbar
