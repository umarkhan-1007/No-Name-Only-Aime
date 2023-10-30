import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Courses from './Components/Courses';
import Disclamer from './Components/Disclamer';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Disclamer' element={<Disclamer/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
