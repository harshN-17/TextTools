import './App.css';
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
  return (
    <>
      <Navbar title = "Text-Tools"/>
      <Textarea content = "write something.." upperbtn = "Convert To Uppercase" lowerbtn = "Convert To Lowercase" capital="Capitalise"/>
    </>  
  );
}

export default App;
