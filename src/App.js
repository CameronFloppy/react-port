import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import Links from './pages/Links';
import About from './pages/About';
import Works from './pages/Works';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/works" element={<Works />}/>
          <Route path="/links" element={<Links />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
