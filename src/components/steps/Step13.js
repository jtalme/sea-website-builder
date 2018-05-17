import React from 'react';
import Interactive from 'react-interactive';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step12({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        Copy and paste the CSS rules below into your <code>style.css</code> file in
        Caret, save the file, and refresh your site in Chrome.
      </p>
      <Gist id="570605a76be9b0a1132c4f4936cd6625"/>
      <p style={s.p}>
        These styles are just a very simple starting point. Try out some other table
        CSS styles, such as changing the <code>background-color</code> on
        the <code>&lt;tr&gt;</code> elements.
      </p>
      <p>
        After you're done experimenting with table styles, lets wrap up the text paragraphs
        on the next step.
      </p>
    </div>
  );
}