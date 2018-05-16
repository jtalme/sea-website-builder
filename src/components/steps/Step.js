import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ForwardBack from '../ForwardBack';
import PageNotFound from '../PageNotFound';
import s from '../../styles/step.style';
import { StepMap } from './Steps';

export default function Step({ match }) {
  const stepNum = match.params.stepNum;
  const StepToRender = StepMap[stepNum].step;
  const title = StepMap[stepNum].title;

  return (
    <Switch>
      <Route
        path={'/steps/' + stepNum.toString()}
        render={() => (
          <div>
            <ForwardBack style={s.forwardBack} match={ match }/>
            <StepToRender title={title}/>
            <ForwardBack style={s.forwardBack} match={ match }/>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}