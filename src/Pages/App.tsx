import React from 'react';
import {  Route, Routes } from 'react-router-dom';
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

  return (
    <>
      <ToastContainer position="top-center" />
        <Routes>
          <Route
            path="/"
            element={localStorage.getItem('Login') ? <Home /> : <Login data={user_data} navigt="home" />}
          />
          <Route path='/home/*' element={<Home />} />
          <Route path='/forgetpassword' element={<Forget_Password />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
    </>
  );
}

export default App;
