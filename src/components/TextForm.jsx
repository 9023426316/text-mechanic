import React, { useState } from 'react'

export default function TextForm(props) {
  var [text, setText] = useState("input your text");

  const handleonchange = (event) => {
    setText(event.target.value)
  }

  const handUpchange = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handUpchangee = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }



  const handlespeak = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
  }

  const handleclear = () => {
    let newText = "";
    setText(newText);

  }

  const handlecopy = () => {
    var newText = document.getElementById('exampleFormControlTextarea1');
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

  const handleRemoveSpace = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
  }

  return (
    <div>
      <div className="mb-3 mx-5 my-5">
        <h1>{props.heading}</h1>
        <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleonchange}></textarea>

        <button className='btn btn-outline-success my-3 mx-2' disabled={text.length === 0} onClick={handUpchange}>Convert to upper btn</button>
      
        <button className='btn btn-outline-success my-3 mx-2'  disabled={text.length === 0} onClick={handUpchangee}>Convert to lower btn</button>
     
        <button className='btn btn-outline-success my-3 mx-2'  disabled={text.length === 0} onClick={handlespeak}>speak</button>
 
  
        <button className='btn btn-outline-success my-3 mx-2'  disabled={text.length === 0} onClick={handlecopy}>Copy</button>
 
        <button className='btn btn-outline-success my-3 mx-2'  disabled={text.length === 0} onClick={handleRemoveSpace}>Remove Space</button>

      </div>

      <div className='container'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} Words</p>
        <p>{text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} reading time</p>
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </div>

  )
}
