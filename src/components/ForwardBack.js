import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Interactive from 'react-interactive';
import s from '../styles/step.style';

export default function ForwardBack({ match }) {

  let stepNum = match.params.stepNum
  let previousStep = stepNum > 1 ? '/steps/' + (Number(stepNum) - 1) : null;
  let nextStep = stepNum < 15 ? '/steps/' + (Number(stepNum) + 1) : null;

  const backButton = previousStep ? (
    <span>
      <span>&larr; </span>
      <Interactive
        as={Link}
        to={previousStep}
      >Previous Step</Interactive>
    </span>
  ) : (<span/>);

  const middlePipe = previousStep && nextStep ? (<span> | </span>) : (<span/>);;

  const forwardButton = nextStep ? (
    <span>
      <Interactive
        as={Link}
        to={nextStep}
      >Next Step</Interactive>
      <span> &rarr;</span>
    </span>
  ) : (<span/>);;

  return (
    <div style={s.pageLinkContainer}>
      {backButton}
      {middlePipe}
      {forwardButton}
    </div>
  );
}