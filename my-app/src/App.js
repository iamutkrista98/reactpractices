import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [alert, setAlert] = useState(null);
  //object
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

  }

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");


    }

  }
  return (
    <>
      <Navbar title='TextUtils' cmp1='About' mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"></TextForm>
        {/*<About></About>*/}

      </div>

    </>
  );
}

export default App;
