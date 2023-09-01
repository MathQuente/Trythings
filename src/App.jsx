import React from 'react';
import './App.css';
import Header from './components/Header/header';
import '../src/styles/global.scss'
import Footer from './components/Footer/footer';
import Main from './components/Main/index'
import Aside from './components/Aside/aside'
import { Outlet } from 'react-router-dom';
import Routes from './Routes'

function App() {
  return (
   <>
    
    <Routes/>
 
   </>
  );
}

export default App;
