import React from 'react';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step5({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>Size</h3>
      <p style={s.p}>
        To change the size of your title, we're going to apply a CSS rule
        that modifies the <code>&lt;h1&gt;</code> tags on your site:
      </p>
      <ol>
        <li>
          Copy and paste the code below into your <code>style.css</code>
          file you have open in Caret.
        </li>
        <li>Save your <code>style.css</code> file</li>
        <li>Refresh your <code>site.html</code> tab in Chrome</li>
      </ol>
      <Gist id="9a560669538062f9787842469380b498"/>
      <p style={s.p}>
        Do you notice anything different about your title? Is it huge?!? We
        applied a rule that made your
        title <strong>100 pixels large.</strong> Try changing
        the <code>100px</code> value
        to <code>1000px</code> or <code>10px</code>. What happens?
      </p>
      <h3>Color</h3>
      <p style={s.p}>
        Now lets change the color of your title. Copy and paste the text below into
        your <code>style.css</code> file you have open in Caret and save it. After saving,
        refresh your site in Chrome, what happened?!?
      </p>
      <Gist id="fa85441b9cc04870e392850b724c7347"/>
      <p>
        Do you want your title to be your favorite color, or maybe
        your <b> least </b> favorite color? Go to the color picker in the link
        below, find a color you like, and copy and paste the value into your
        <code>style.css</code> file. Remember to save the file, and refresh
        the page to load your changes.
      </p>
      <a
        href="https://www.w3schools.com/colors/colors_picker.asp"
        target="_blank"
      >Color Picker</a>
      <p style={s.p}>
        While we're playing with colors, change the color value in
        the <code>background-color</code> CSS rule too!
      </p>
      <p style={s.p}>
        Continue on to the next step to change your title font.
      </p>
    </div>
  );
}