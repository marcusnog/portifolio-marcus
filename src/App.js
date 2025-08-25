import React from 'react';
import './App.css';

function App() {
  console.log('App component is rendering!');
  
  return (
    <div className="App">
      <h1>Teste JavaScript</h1>
      <p>Se você está vendo isso, o JavaScript está funcionando!</p>
      <button onClick={() => alert('JavaScript funcionando!')}>
        Clique aqui para testar
      </button>
    </div>
  );
}

export default App;
