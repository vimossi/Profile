import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import me from '../components/dev.jpg'

function Home() {
  return (
  <main>
    <div class="principal">
    <div class="inicio">
    <h1 class="titulo">Hi,<br />
      My name is <span class="nome">Vinicius, <br /></span>
      a Front-end Developer</h1>
  </div>
  <div class="foto">
    <img id="Vinicius" src={me} alt="Foto do Vinicius"/>
  </div>
  <div class="link">
    <nav id="links">
      <div><a class="linkedin" href="https://www.linkedin.com/in/vinicius-passos-mossi" target="_blank" rel="noreferrer">LinkedIn</a></div>
      <div><a class="Github" href="https://github.com/vimossi" target="_blank" rel="noreferrer">GitHub</a></div>
      <div><a class="instagram" href="https://www.instagram.com/vimossi/" target="_blank" rel="noreferrer">Instagram</a></div>
    </nav>
  </div>
  <div class="botaoContact">
<Link to='/contact'>
Contact
</Link>
  </div>
  <div class="botaoAbout">
<Link to='/about-me'>
About
</Link>
  </div>
  <div class="botaoProjects">
<Link to='/projects'>
Contact
</Link>
  </div>
</div>
</main>
)};

export default Home;
