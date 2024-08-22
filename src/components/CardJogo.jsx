import React from 'react';
//import imag from '../assets/react.svg'

function CardJogos({ jogos, ativaFavorito, isFavorito }) {
  return (
    <div style={{ border: '3px solid black', margin: '10px', padding: '10px', background: '#aab597'}}>
      <img src={jogos.Imagem} alt={`Nome do jogo: ${jogos.Nome}`} width="100" />
      <h3>{jogos.Nome}</h3>
      <p>Dono: {jogos.Dono}</p>
      <p>Ano de Lançamento: {jogos.Ano}</p>
      <p>Prêmios: {jogos.Premio}</p>
      <p>Preço: {jogos.Preco}</p>
      <p>Plataformas: {jogos.Plataformas}</p>
      <button onClick={() => ativaFavorito(jogos)}>
        {isFavorito ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  );
}

export default CardJogos;
