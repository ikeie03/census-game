import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Home.tsx'
import Game from './Game.tsx'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App