// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("DarkMode is Enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("LightMode is Enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (
    <>

      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading = "Enter the Text to be analyzed" showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch> */}

          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the Text to be analyzed" showAlert={showAlert} mode={mode} />} />
          </Routes>

        </div>
      </Router>

    </>

  );
}

export default App;


