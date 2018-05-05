import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Step1 from './Step1';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>SEA Website Tutorial</h1>
      <Interactive
        as="a"
        href="https://github.com/tallstak/sea-website-builder"
        style={s.repoLink}
        {...s.link}
      >https://github.com/tallstak/sea-website-builder</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/step1" component={Step1} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}