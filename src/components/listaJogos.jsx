import React from 'react';
import CardPaises from './CardJogo';

function ListaJogos({ jogos, ativaFavorito }) {
  return (
    <div>
      {jogos.map((jogos) => (
        <CardPaises
          key={jogos.id}
          jogos={jogos}
          ativaFavorito={ativaFavorito}
          isFavorite={false}
         
        />
      ))}
    </div>
  );
}

export default ListaJogos;

