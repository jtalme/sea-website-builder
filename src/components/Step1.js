import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import { Code } from '../styles/style';
import s from '../styles/step1.style';

const Step1Text = () => (
  <div>
    <h3>Required Tools</h3>
    <p style={s.p}>
      Lets get started by downloading some tools that will help us build. 
      A browser will help us view our website while we build, Chrome 
      is my go to.
    </p>
    <p> 
      <Interactive
        as={Link}
        {...s.link}
        to="https://www.google.com/chrome"
      >Download Chrome</Interactive>
    </p>
  </div>
);

export default function Step1() {
  return (
    <Switch>
      <Route
        exact path="/example/two-deep"
        render={({ location }) => (
          <div>
            <Step1Text />
            <ExampleTwoDeepComponent location={location} />
          </div>
        )}
      />
      <Route
        exact path="/step1"
        render={() => (
          <div>
            <Step1Text />
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to="/example/two-deep?field1=foo&field2=bar#boom!"
              >Example two deep with query and hash</Interactive>
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}