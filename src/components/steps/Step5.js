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
          Copy and paste the code below into your <code>style.css</code> file
          you have open in Caret.
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
        Do you want your title to be your favorite color? Go to the color
        picker in the link below, find a color you like, and copy and
        paste the value into your <code>style.css</code> file. Remember
        to save the file, and refresh the page to load your changes.
      </p>
      <a
        href="https://www.w3schools.com/colors/colors_picker.asp"
        target="_blank"
      >Color Picker</a>
      <h3>Position</h3>
      <p style={s.p}>
        Finally, we'll change the position of your title so it's centered. Add
        the <code>text-alignment</code> rule below to
        your <code>h1</code> CSS rules. Copy and paste
        the <code>body</code> CSS rules into your <code>style.css</code> file
        as well. When you're done, save your <code>style.css</code> file in Caret
        and refresh your <code>site.html</code> tab in Chrome.
      </p>
      <Gist id="640869c4550bf989c422543ed74d71cc"/>
      <p style={s.p}>
        While we're playing with colors, change the color value in
        the <code>background-color</code> CSS rule too! Continue on to
        the next step to change your title font.
      </p>
    </div>
  );
}