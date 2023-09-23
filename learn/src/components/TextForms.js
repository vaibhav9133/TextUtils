import React, { useState } from 'react'

export default function(props) {
    function handleonChange(event){
        console.log("Converted")

     setText(event.target.value)
    }
    function handleChange(){
        ////console.log("Coverting...")
        setText(text.toUpperCase())
    }
    const [text,setText]=useState("")
    let ClearText=()=>{

setText("")
    }
  let ClearSpace = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
}

    
  return (<>
 <div className="mb-3 container" style={{color: props.mode==='dark'?'white':'#042743'}}>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
    <button type="submit" className="btn btn-primary" onClick={handleChange}>Click to convert</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={ClearText} >Clear Text</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={ClearSpace} >Clear Space</button>
  </div>
  <div className="container">
   <h2 style={{color: props.mode==='dark'?'white':'#042743'}}>Your text summary</h2>
   <p style={{color: props.mode==='dark'?'white':'#042743'}}>{0.008*text.length} minutes to read</p>
   <p style={{color: props.mode==='dark'?'white':'#042743'}}>Contains {text.split(" ").length} words and {text.length} chracters</p>
   <h2 style={{color: props.mode==='dark'?'white':'#042743'}}>Preview</h2>
   <p style={{color: props.mode==='dark'?'white':'#042743'}}>{text}</p>

  </div>
  
  </>
  )
}
