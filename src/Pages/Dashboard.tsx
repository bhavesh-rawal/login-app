import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const [LogIN, setLogIN] = useState({ Fname: '', Lname: '', email: '' })

  useEffect(() => {
    if (!localStorage.getItem('Login')) {
      navigate('/');
    }
    else {
      navigate("/home")
      const loginData = localStorage.getItem('Login');
      setLogIN(loginData ? JSON.parse(loginData) : [])
    }
  }, []);

  return (
    <h1>
      Welcome To Your Profile {`${LogIN.Fname} ${LogIN.Lname}`}
    </h1>
  )
}

export default Dashboard
