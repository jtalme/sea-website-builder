import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import s from '../../styles/step.style'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';

export const StepsMap = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
  5: Step5,
  6: Step6,
  7: Step7,
  8: Step8
}

export default function Steps() {
  let stepLinks = {};

  stepLinks = Object.keys(StepsMap).map(function(key) {
      return <div style={s.pageLinkContainer}>
               <Interactive
                 as={Link}
                 {...s.link}
                 to={'/step/' + key}
               >Step {key}</Interactive>
             </div>
      });

  return (
    <Switch>
      <Route
        path={'/steps'}
        render={() => (
          <div>
            {stepLinks}
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}