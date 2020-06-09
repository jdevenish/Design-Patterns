import React from 'react';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="content">
            <h1>High-Order Components</h1>
            <p>Defn: A function that takes a component and returns a new component</p>
            <p>Why: To share common code between components where other patterns are not suitable.</p>
            <p>Example: const IronMan = withSuit(TonyStark);</p>
        </div>
        <div className="class-based">
            <h3>Using class based components</h3>
            <ClickCounter/>
            <HoverCounter/>
        </div>
    </div>
  );
}

export default App;
