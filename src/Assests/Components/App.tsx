import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Provider store={Store}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
