
import './App.css';
import Footer from './components/Footer';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";


const App = () => {


  const [Mode, setMode] = useState('light')
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#011212';
      document.body.style.color = 'white';
      document.body.style.transition = '0.9s';
      setIsDarkMode(false);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.body.style.transition = '0.9s';

      setIsDarkMode(true);
    }
  }

  return ( 
   <>
    <div className="main">
      <BrowserRouter>
        <Navbar mode={Mode} toggleMode={toggleMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route exact path="/" element={<News mode={Mode} key="general" country="in" category="general" />}></Route>
          <Route exact path="/general" element={<News mode={Mode} key="general" country="in" category="general" />}></Route>
          <Route exact path="/business" element={<News mode={Mode} key="business" country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News mode={Mode} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route exact path="/health" element={<News mode={Mode} key="health" country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News mode={Mode} key="science" country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News mode={Mode} key="sports" country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News mode={Mode} key="technology" country="in" category="technology" />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
    </>
  )

}

export default App;