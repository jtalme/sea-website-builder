import React from 'react';
import Interactive from 'react-interactive';
import Gist from 'react-gist';
import { Code } from '../../styles/style';
import s from '../../styles/step.style';

export default function Step12() {
  return (
    <div>
      <h3>Adding a Conclusion</h3>
      <p style={s.p}>
        For the final paragraph on your site lets add a conclusion about your
        science project. A conclusion usually contains some information about the
        following questions:
        <ul>
          <li>What did you learn?</li>
          <li>What would you do differently if you were to do this project again?</li>
          <li>If you had more time and supplies, how would you use them?</li>
        </ul>
        That last question is my favorite. If I had more time and supplies, I might
        build a drone that would deliver BBQ to me and my friends at work! What would
        you do? Copy and paste the section at the bottom of the sample code below,
        and fill in some details about your conclusion.
      </p>
      <Gist id="91dcb86890b994f552bb2586e1c42c95"/>
      <p style={s.p}>
        After you have filled in the conclusion, lets move on to the next step to add
        some images and gifs!!!
      </p>
    </div>
  );
}