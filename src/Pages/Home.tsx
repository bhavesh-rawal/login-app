import React from 'react'
import { Container } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Account from './Account';
import Top_Navbar from '../Components/Navbar/Top_Navbar';

const Home = () => {
    return (<>
        <Top_Navbar Navs={[{ titls: "Dashboard", nav: "/home" }, { titls: "Account", nav: "account" }]} />
        <Container>
            <Routes>
                <Route path='/' element={<Dashboard  />} />
                <Route path='/account/*' element={<Account />} />
            </Routes>
        </Container>
    </>

    )
}

export default Home