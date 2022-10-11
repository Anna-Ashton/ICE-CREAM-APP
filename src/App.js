import "./App.css";
import CreamContainer from "./CreamContainer";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CreamContainer />} />
    
        <Route path='/home' element={<Home />} />
  
    
        <Route path='/pricing' element={<Pricing />} />
    
    
        <Route path='/about' element={<About />} />
    
    
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
