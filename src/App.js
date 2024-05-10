import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState({
    msg: "welcome to textutils",
    type: "success"
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>  </Route>
            <Route exact path="/" element={<TextForm heading='Enter text to analyse' mode={mode} showAlert={showAlert}/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
