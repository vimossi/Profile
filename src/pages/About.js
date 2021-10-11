import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return(
    <section>
      <h1>About me</h1>
        <div class="sobre">
          Sempre tive interesse desde muito novo em descobrir como as coisas aconteciam, e por esse viés, haviam muitos caminhos para seguir e no decorrer dos anos descobri que gostava de aprender a estudar, da ciência, de refletir.<br />
          Percebi somente em 2015 a real importância de uma formação mais sólida, quando consegui meu primeiro emprego, em um ambiente com centenas de pessoas em um Call Center, com uma diversidade surreal, onde pude conhecer e desenvolver minhas soft skills de maneira mais árdua e eficiente.<br />
          No desenvolvimento das minha capacidades, despertei interesse na Psicologia, mas entrei na Pedagogia pelo ENEM em 2017 por não ter conseguido nota. Em 2020 por conta da pandemia repensei muito a profissão, e foi onde descobri a Trybe, o curso que tem mudado minha perspectiva de vida e me permitiu conhecer o mundo da programação.<br />
          Atualmente, possuo conhecimento de Front end (HTML, CSS, Javascript,React, Redux, ContextAPI, Hooks, RTL e Jest) e estou estudando Back end, para me tornar um Desenvolvedor Full Stack.
        </div>
        <div>
         <Link to='/'>Home</Link>
        </div>
    </section>
  );
}
