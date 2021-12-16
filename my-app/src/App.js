import './App.css';
import FetchClass from './components/FetchClass';
import FetchFunction from './components/FetchFunction';
import { Component } from 'react';

function App() {
  return (
    <div className="container">
      <h2 >My todo list </h2>
      <div className="underline"></div>
      {/* <p>(with class component)</p> */}
      {/* <FetchClass /> */}
      <p>(with function component)</p>
      <FetchFunction />
    </div>
  );
}

export default App;