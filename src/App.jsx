
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {


  const [mode, setMode] = useState('light'); 

  const [btnText, newbtnText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'black';
      document.body.style.color= 'white';
      newbtnText('Enable to Dark Mode');
      showAlert("Dark Mode Has Been Enable", "sucess")

      setTimeout(() => {
        document.title= "SIT - Admission";
      }, 1000);
      setTimeout(() => {
        document.title= "SIT - B.sc.IT"
      }, 500);
    } else {
      setMode('light')
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      newbtnText('Enable to Light Mode');
      showAlert("Light Mode Has Been Enable", "success")
    }
  }
  return (
    <>
      <Navbar title="Text Mechanic"  mode={mode} toggleMode={toggleMode} btntext={btnText}></Navbar>
      <Alert alert={alert}/>
      <TextForm heading="Enter Text to Analyse Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}></TextForm>
    </>
  );
}

export default App
