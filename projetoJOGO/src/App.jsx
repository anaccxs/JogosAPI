// App.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Se mantiver este arquivo para estilos globais

import CardComponent from './components/CardComponent';

function App() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch('jogos-api.json') // Assumindo que o arquivo jogos-api.json está no diretório public
      .then(response => response.json())
      .then(data => setJogos(data))
      .catch(error => console.error('Erro ao carregar os jogos:', error));
  }, []);

  return (
    <div className="App">
      <h1>Jogos</h1>
      <div className="card-container">
        {jogos.map((jogo, index) => (
          <CardComponent key={index} jogo={jogo} />
        ))}
      </div>
    </div>
  );
}

export default App;
