import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Homepage.jsx'
import LogIn from './components/Login.jsx'
import CrossWordPage from './pages/CrosswordPage.jsx'
import Crossword1532024 from './components/Crossword1532024.jsx';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<LogIn />}></Route> 
        </Route>
        <Route>
        <Route path="/crosswordpage" element={<CrossWordPage/>}></Route>
        <Route path="/1532024" element={<Crossword1532024 />} /></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
