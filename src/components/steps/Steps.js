import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import s from '../../styles/step.style'
import Step1 from './Step1';
import Step2 from './Step2';

export default function Steps() {
  return (
    <Switch>
      <Route
        path={'/steps'}
        render={() => (
          <div>
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to='/step/1'
              >Step 1</Interactive>
            </div>
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to='/step/2'
              >Step 2</Interactive>
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}