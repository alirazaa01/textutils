import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { useState } from 'react'
import Alert from './components/Alert'; 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";


function App() {
  const [mode, setMode] = useState('light') // Whether dark  mode is enabled or not

  const [alert, setAlert] = useState(null);
   const showAlert = (message, type)=>{
      setAlert({
          msg: message,
          type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500); 
   }


  const toggleMode = () =>{
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042743'; 
      showAlert('Dark mode has been alert' , 'success');
      document.title = 'TextUtils - Dark Mode';
      // You can use or not that is Optional
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is Installed Now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been alert", "success");
      document.title = "textUtils - Light Mode";
    }
  }

  return (
    <>
      {/* Passing props explicitly */}
      {/* Using default props */}
      {/* <Navbar title="test 1" aboutText="" /> */}
        <div className="container my-6">
          <Alert alert={alert} />
      <BrowserRouter>
          <Navbar
            title="TextUtils"
            aboutText="About"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Routes>
            <Route  path="/" 
              element={
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
              } />
            <Route  path="/About" element={<About />} />
          </Routes>
      </BrowserRouter>
        </div>
    </>
  );
}

export default App;
