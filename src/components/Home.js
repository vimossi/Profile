import React from 'react';
import { Link } from 'react-router-dom';
import '../components/index.css';
import me from '../components/dev.jpg'

function Home() {
  return (
  <main>
    <h1 class="titulo">Hi, my name is 
      <span class="nome"> Vinicius</span><br /></h1>
    <nav class="botoes">
      <Link to='/about-me'>Sobre mim</Link>
      <Link to='/projects'>Projetos</Link>
      <h2>Entre em contato</h2>  
      <a href="https://www.linkedin.com/in/vinicius-passos-mossi" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://github.com/vimossi" target="_blank" rel="noreferrer">GitHub</a>
      <a href="mailto:vini_agg@hotmail.com" target="noreferer" rel="_blank">Email</a>
    </nav>
    <img id="Vinicius" src={me} alt="Selfie do Vinicius com o computador ao fundo" width="300px"/>
  </main>
)};

export default Home;
