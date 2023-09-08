import React, { useEffect } from 'react';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from '../Components/Forms/Login';
import Forget_Password from '../Components/Forms/Forget_Password';
import Registration from '../Components/Forms/Registration';


function App() {
  const { user_data } = useSelector((state: any) => state.user);
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('Login')) {
      navigate('/');
    }
    else {
      navigate("/home")
         }
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
        <Routes>
          <Route
            path="*"
            element={localStorage.getItem('Login') ? <Home /> : <Login data={user_data} navigt="home" />}
          />
          <Route path='/home/*' element={<Home />} />
        <Route path='/forgetpassword' element={<Forget_Password data={user_data} />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
    </>
  );
}

export default App;
