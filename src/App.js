import "./App.css";
import CreamContainer from "./CreamContainer";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreamContainer />} />
      </Routes>
    </div>
  );
}

export default App;
