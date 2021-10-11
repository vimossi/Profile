import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return(
    <section>
    <h1>Entre em contato comigo</h1>
    <div class="link">
      <nav id="links">
        <a class="linkedin" href="https://www.linkedin.com/in/vinicius-passos-mossi" target="_blank" rel="noreferrer">LinkedIn</a><br />
        <a class="Github" href="https://github.com/vimossi" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </div>
    <div>
      <Link to='/'>Home</Link>
    </div>
    </section>
  );
}