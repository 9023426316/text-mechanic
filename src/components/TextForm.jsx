import React, { useState } from 'react'

export default function TextForm(props) {
  var [text, setText] = useState("input your text");

  const handleonchange = (event) => {
    setText(event.target.value)
  }

  const handUpchange = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  }

  const handUpchangee = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  }



  const handlespeak = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
  }

  const handleclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Field be clear", "success")

  }


  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Converted to Copy", "success")
  }

  const handleRemoveSpace = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));

  }

  return (
    <div>
      <div className="mb-3 mx-5 my-5">
        <h1>{props.heading}</h1>
        <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleonchange}></textarea>

        <button className='btn btn-outline-success my-3 mx-2' disabled={text.length === 0} onClick={handUpchange}>Convert to upper btn</button>
      
        <button className='btn btn-outline-success my-3 mx-2'  disabled={text.length === 0} onClick={handUpchangee}>Convert to lower btn</button>
     
        <button className='btn btn-outline-success my-3 mx-2'  disabled={text.length === 0} onClick={handlespeak}>speak</button>
        
        <button className='btn btn-outline-success my-3 mx-2'  disabled={text.length === 0} onClick={handleclear}>Clear</button>
  
        <button className='btn btn-outline-success my-3 mx-2'  disabled={text.length === 0} onClick={handlecopy}>Copy text</button>
 
        <button className='btn btn-outline-success my-3 mx-2'  disabled={text.length === 0} onClick={handleRemoveSpace}>Remove Space</button>

      </div>

      <div className='container'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} Words</p>
        <p>{text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} reading time</p>
        <h3>preview</h3>
        <p>{text.length>0 ? text : "Nothing to Preview !"}</p>
      </div>
    </div>

  )
}
