// components/CardComponent.js
import React from 'react';

const CardComponent = ({ jogo }) => {
  return (
    <div className="card">
      <h2>{jogo.nome}</h2>
      <p><strong>Plataforma:</strong> {jogo.plataforma}</p>
      <p><strong>Ano:</strong> {jogo.ano}</p>
      <p><strong>Gênero:</strong> {jogo.genero}</p>
    </div>
  );
}

export default CardComponent;
