import React from 'react';
import CardJogos from '../components/CardJogo.jsx';

function Favoritos({ favoritos, ativaFavorito }) {
  return (
    <div>
      {favoritos.map((jogos) => (
        <CardJogos
          key={jogos.id}
          jogos={jogos}
          ativaFavorito={ativaFavorito}
          isFavorite={true}
        />
      ))}
    </div>
  );
}

export default Favoritos;
