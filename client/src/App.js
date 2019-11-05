import React from 'react';
import './App.css';
import FramerRouter from "./components/FramerRouter";
import {Intro, Question} from './pages';

function App(props) {
  return (
    
    <div className="App">
    <FramerRouter>
      <Intro path="/" />
      <Question client={props.client} path="/question" />
    </FramerRouter>
    </div>
  );
}

export default App;
