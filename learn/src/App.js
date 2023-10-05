import Navbar from "./components/Navbar.js";
import TextForms from "./components/TextForms.js";
import About from "./components/About.js";
import { useState } from "react";
import AlertP from "./components/AlertP.js";

function App() {
  const[alert,setAlert]=useState(null);
const showAlert= (message,type)=>{
setAlert({
msg:message,
type:type
})
setTimeout(() => {showAlert(null)
        
}, 3000);

}
  const [mode,setMode]=useState('light');
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success")
     
    }
  }
  return (<>
<Navbar title="Vaibhav" mode={mode} toggleMode={toggleMode}></Navbar>
<AlertP alert={alert}/>
<h2 class="container" style={{ color: mode==='dark'?'white':'#042743'}}> Enter text to analyze</h2>
<TextForms mode={mode} toggleMode={toggleMode}/>
</>
  )
}

export default App;
