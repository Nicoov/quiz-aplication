import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './quiz.css'
import Quiz from './pages/quizz'
import Inicio from './pages/inicio'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/inicio/quiz' element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;

