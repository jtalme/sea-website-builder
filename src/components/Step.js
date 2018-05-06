import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import s from '../styles/step.style'
import Step1 from './Step1';
import Step2 from './Step2';

const Steps = {
  1: Step1,
  2: Step2
}

export default function Step({ match }) {
  const stepNum = match.params.stepNum;
  const StepToRender = Steps[stepNum];
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