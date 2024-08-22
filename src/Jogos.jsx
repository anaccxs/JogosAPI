import React, {useState} from 'react';
import {fetchJogos} from './services/api';
import ListaJogos from './components/listaJogos';
import Favoritos from './components/Favoritos';
import './Jogos.css'


const jogos = () => {

  const [jogos, setJogos] = useState([]);  
  const [favoritos, setFavoritos] = useState([]);
 const carregaJogos = async () => {
    try {
      const dadosJogos = await fetchJogos();
      setJogos(dadosJogos);
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  };

  const alternarFavorito = (jogo) => {
    if (favoritos.find(fav => fav.id === jogo.id)) {
      
      setFavoritos(prevFavoritos => prevFavoritos.filter(fav => fav.id !== jogo.id));
      setJogos(prevJogos => [...prevJogos, jogo]);
    } else {
     
      setJogos(prevjogos => prevjogos.filter(c => c.id !== jogo.id));
      setFavoritos(prevFavoritos => [...prevFavoritos, jogo]);
    }
  };


  return (
    <div className="container">
      <h1 className="titulo1">Principais jogos da atualidade</h1>
      <button onClick={carregaJogos} className='botao1'>Carregar Jogos</button>
      <div className="container-lista">
        <div className="lista">
          <h2>Lista de todos os jogos</h2>
          <p>Quantidade de jogos: {jogos.length}</p>
          <ListaJogos jogos={jogos} ativaFavorito={alternarFavorito} />
        </div>
        <div className="lista">
          <h2>Jogos favoritos</h2>
          <p>Quantidade de jogos: {favoritos.length}</p>
          
          <Favoritos favoritos={favoritos} ativaFavorito={alternarFavorito} />
        </div>
      </div>
    </div>
  );
};

export default jogos;













/* fetch('./jogos.json').then(res=>res.json()).then(dados=>mostraPaises(dados))


function mostraPaises(dados){
   const tabela=document.querySelector('#tabela')

   dados.forEach(item => {
     tabela.innerHTML+=`<tr><td>${item.id}</td><td>${item.name}</td><td>${item.population}</td><td><img src=${item.flag}></td><td><button><3</button></td></tr>`
   
   });
      
}

function Paises(){
   return(
      <>


<div className="header"><h1>Países</h1></div>

      <div className="divheader">
         <div className="div1">
            <table id='tabela'>
               <tr>
                  <td>ID</td>
                  <td>NOME</td>
                  <td>POPULACAO</td>
                  <td>BANDEIRA</td>
                  <td>FAVORITAR</td>
               </tr>
            </table>
         </div>
         </div>  
         
         <div className="header2"><h1>Países</h1></div>

         <div className="div2">
            <table id='tabela2'>
               <tr>
                  <td>ID</td>
                  <td>NOME</td>
                  <td>POPULACAO</td>
                  <td>BANDEIRA</td>
                  <td>DESFAVORITAR</td>
               </tr>
            </table>
         </div>
      </>
   )
}

export default Paises; */