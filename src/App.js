import React from 'react';
import './App.css';
import Navigation from "./components/navigation"
import EnterWeight from "./components/weight"

function App() {
  return (
    <div className="App">
        <Navigation />
        <EnterWeight />
      <p>Paragraph text</p>
    </div>
  );
}

export default App;
