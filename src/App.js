import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>

  <Navbar/>
    <div className="App">
        <h1>welcome to reactjs project</h1>
        {/* <Route path="/home" component={Home} /> */}

    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
