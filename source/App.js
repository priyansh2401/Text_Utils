import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 2000 );
  
  const toggleMode= () => {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode has been Enabled", "success");
    // document.title = "TextUtils - Dark Mode";

          // setInterval(() => {
          //   document.title = "TextUtils is Amazing";
          // }, 2000);

          // setInterval(() => {
          //   document.title = "Install TextUtils Now";
          // }, 1500);

  }
  else {
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been Enabled", "success");
    // document.title = "TextUtils - Light Mode";

  }
}


  return (
  <>
    <Router>
      <Navbar title = 'TextUtils' aboutText = 'About TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3"/>

      <Routes>

        {/* exact path */}
        {/* /users --> component 1 */}
        {/* /users/home --> component 2 */}
          <Route exact path="/about" element = {<About />}> </Route>
            
          <Route exact path="/" element = {<TextForm showAlert ={showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />}> </Route>
          
      </Routes>
    </Router>
    </>
  );
};

export default App;
