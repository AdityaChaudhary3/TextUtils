import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { React ,useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light'); //tells wheater dark mode is enabled or not
  const [alert, setalert]= useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
 const toggleMode=()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
    document.title = 'TextUtiles - DarkMode';
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title = 'TextUtiles - LightMode';
  }
 }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3" >
      {/* <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
          <Route exact path="/about" element={<About/>}/>
      </Routes> */}
        
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
