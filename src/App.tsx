import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home"
import Questions from "./pages/questions"
import Results from "./pages/results"

import './styles/App.css'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/questions" element={<Questions/>}/>
          <Route path="/results" element={<Results/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}