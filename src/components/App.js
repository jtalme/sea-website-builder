import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Example from './Example';
import Steps from './steps/Steps';
import Step from './steps/Step';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/example" component={Example} />
      <Route exact path="/steps" component={Steps} />
      <Route path="/steps/:stepNum" component={Step} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default function App({ match }) {
  // super hacky way to keep app styles off the example page
  if (window.location.href.indexOf("example") > -1) {
    return (
      <div style={s.example}>
        <AppRouter />
      </div>
    );
  }

  return (
    <div style={s.root}>
      <h1>SEA Website Tutorial</h1>
      <Interactive
        as="a"
        href="https://github.com/tallstak/sea-website-builder"
      >https://github.com/tallstak/sea-website-builder</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <AppRouter />
    </div>
  );
}