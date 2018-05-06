import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ForwardBack from '../ForwardBack'
import PageNotFound from '../PageNotFound';
import s from '../../styles/step.style'
import { StepsMap } from './Steps'

export default function Step({ match }) {
  const stepNum = match.params.stepNum;
  const StepToRender = StepsMap[stepNum];
  const nextStep = "/steps/" + (Number(stepNum) + 1);

  return (
    <Switch>
      <Route
        path={'/steps/' + stepNum}
        render={() => (
          <div>
            <StepToRender />
            <ForwardBack match={ match }/>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}