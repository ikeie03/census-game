import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import Lost from "./Lost";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/lost" element={<Lost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App