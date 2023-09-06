import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ResetPassword from '../Components/Forms/ResetPassword';
import Profile_Card from '../Components/Cards/Profile_Card';


const Account = () => {

  const [LogIN, setLogIN] = useState({ Fname: '', Lname: '', email: '' })

  useEffect(() => {

    const loginData = localStorage.getItem('Login');
    setLogIN(loginData ? JSON.parse(loginData) : [])

  }, []);

  return (<>
    
    < Routes >
      < Route path='/' element={< Profile_Card data={LogIN}/>} />
      < Route path='/resetPassword' element={< ResetPassword />} />

    </Routes >
  </>)
   
}

export default Account;