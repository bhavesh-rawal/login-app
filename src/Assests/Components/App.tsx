import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './Registration';
import Main from './Main.Page';


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Provider store={Store}>

          <Routes>

            <Route
              path="/*"
              element={localStorage.getItem('Login') ? <Home /> : <Main />}
            />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter >
    </>
  );
}

export default App;
