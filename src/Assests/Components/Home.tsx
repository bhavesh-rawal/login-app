import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('Login')) {
            navigate('/');
        }
        else {
            navigate("/home")
        }
    }, []);
    return (
        <div style={{ fontSize: '10rem' }}>
            Home
        </div>
    )
}

export default Home