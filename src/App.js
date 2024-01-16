import React from 'react';

import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import './index.css';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import PLEditor from './pages/CLanguage';
import ContactUs from './pages/ContactUs' 
export function App() {
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/c-language' element={<PLEditor />} />
      </Routes>
    </>
  );
}

function WrappedApp(){
  return <HashRouter><App /></HashRouter>
}
export default WrappedApp;