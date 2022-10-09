import "./App.css";
import CreamContainer from "./CreamContainer";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Pricing from "./Pricing";
import About from "./About";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CreamContainer />} />
      </Routes>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
