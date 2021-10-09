import React from 'react';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/contact" component={ Contact }/>
      <Route exact path="/about-me" component={ About }/>
      <Route exact path="/projects" component={ Projects }/>
    </Switch>
  );
}

