import "./App.css";
import CreamContainer from "./CreamContainer";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CreamContainer />} />
      </Routes>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
