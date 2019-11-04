import React from 'react';
import './App.css';
import FramerRouter from "./components/FramerRouter";
import {Intro, Question} from './pages';

function App() {
  return (
    
    <div className="App">
    <FramerRouter>
      <Intro path="/" />
      <Question path="/question" />
    </FramerRouter>
    </div>
  );
}

export default App;
