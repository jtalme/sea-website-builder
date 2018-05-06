import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import s from '../../styles/step.style'
import StepsMap from './Steps'

export default function Step({ match }) {
  const stepNum = match.params.stepNum;
  const StepToRender = StepsMap[stepNum];
  const nextStep = "/steps/" + (Number(stepNum) + 1);
  console.log(nextStep);

  return (
    <Switch>
      <Route
        path={'/steps/' + stepNum}
        render={() => (
          <div>
            <StepToRender/>
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to={nextStep}
              >Next Step</Interactive>
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}