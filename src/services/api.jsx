export const fetchJogos = async() => {

    const respostaJogos = await fetch('./jogos-api.json');
    const dataJogo = await respostaJogos.json();
    return dataJogo;
  
  };
  

  