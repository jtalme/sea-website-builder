import React from 'react';
import Interactive from 'react-interactive';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step13({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        For the final paragraph on your site lets add a conclusion about your
        science project. A conclusion usually contains some information about the
        following questions:
      </p>
      <ul>
        <li>What did you learn?</li>
        <li>What would you do differently if you were to do this project again?</li>
        <li>If you had more time and supplies, how would you use them?</li>
      </ul>
      <p style={s.p}>
        That last question is my favorite. If I had more time and supplies, I might
        build a drone that would deliver BBQ to me and my friends at work! What would
        you do? Copy and paste the section at the bottom of the sample code below,
        and fill in some details about your conclusion.
      </p>
      <Gist id="91dcb86890b994f552bb2586e1c42c95"/>
      <p style={s.p}>
        Congrats, you built your own science project site! Continue exploring HTML
        and CSS tutorials to learn more.
      </p>
    </div>
  );
}