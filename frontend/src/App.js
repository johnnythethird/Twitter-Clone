import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Components
import Homepage from './components/Homepage/Homepage';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
