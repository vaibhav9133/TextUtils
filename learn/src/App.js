import Navbar from "./components/Navbar.js";
import TextForms from "./components/TextForms.js";
import About from "./components/About.js";
import { useState } from "react";

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
     
    }
  }
  return (<>
<Navbar title="Vaibhav" mode={mode} toggleMode={toggleMode}></Navbar>
<h2 class="container" style={{ color: mode==='dark'?'white':'#042743'}}> Enter text to analyze</h2>
<TextForms mode={mode} toggleMode={toggleMode}/>
</>
  )
}

export default App;
