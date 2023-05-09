import React from 'react';
import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Hotpage from './pages/hotpage/hotpage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Hotpage/>
      <ToastContainer/>
    </>)
}

export default App;
