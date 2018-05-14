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
import Step9 from './Step9';
import Step10 from './Step10';
import Step11 from './Step11';
import Step12 from './Step12';
import Step13 from './Step13';

export const StepsMap = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
  5: Step5,
  6: Step6,
  7: Step7,
  8: Step8,
  9: Step9,
  10: Step10,
  11: Step11,
  12: Step12,
  13: Step13
}

export default function Steps() {
  let stepLinks = {};

  stepLinks = Object.keys(StepsMap).map(function(key) {
      return <div style={s.pageLinkContainer} key={key}>
               <Interactive
                 as={Link}
                 {...s.link}
                 to={'/steps/' + key}
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