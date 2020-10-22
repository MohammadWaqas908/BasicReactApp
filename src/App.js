import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="Basics">
      <h1 className="top_heading">Assignment no.3 submitted by M.waqas given in class3</h1>
      <p className="name_print">Hello World From <strong>{props.name}</strong> And Age is <strong>{props.Age}</strong></p>
      <h1 className="ol"><span>Ordered_list:</span></h1>
      <ol className="ordered_list">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
      </ol>
      <h1 className="ul"><span>Unordered_list:</span></h1>
      <ul className="unordered_list">
        <li>Assignment no.3</li>
        <li>Dave Ceddia Tutorials</li>
        <li>Turn 1</li>
        <li>Done</li>
      </ul>
      <p className="exp">{props.firstno} + {props.sconedno} = {props.firstno + props.sconedno}</p>
    </div>
  );
}

export default App;
