import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import me from '../components/dev.jpg'

function Home() {
  return (
  <main>
    <div class="principal">
    <div class="inicio">
    <h1 class="titulo">Hi, my name is 
      <span class="nome"> Vinicius</span><br /></h1>
  </div>
  <div class="foto">
    <img id="Vinicius" src={me} alt="Foto do Vinicius"/>
  </div>
  <div class="botaoContact">
    <Link to='/contact'>Contact</Link>
  </div>
  <div class="botaoAbout">
    <Link to='/about-me'>About</Link>
  </div>
  <div class="botaoProjects">
    <Link to='/projects'>Projects</Link>
  </div>
</div>
</main>
)};

export default Home;
