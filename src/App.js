
import './App.css';
import Accordion from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <div className="App">
       <>
        <Navbar title="Textutis" />
        <div className="container">
        <Textform heading="Enter the text to analyze"/> 
        <Accordion/> 
        </div>

       </>
    </div>
  );
}

export default App;