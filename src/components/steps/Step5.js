import React from 'react';
import Gist from 'react-gist';
import Interactive from 'react-interactive';
import { Code } from '../../styles/style';
import s from '../../styles/step.style';

export default function Step5() {
  return (
    <div>
      <h3>Modifying Your Title</h3>
      <h5>Size</h5>
      <p style={s.p}>
        HTML provides many header tags that change the text size. We
        started with the largest one: <code>h1</code>. Copy and paste
        the other header tags shown below into your <code>site.html</code>
        file under the <code>&lt;h1&gt;</code> tag.
      </p>
      <Gist id="9a560669538062f9787842469380b498"/>
      <p>
        Which header tag do you like best? Use that one!
      </p>
      <h5>Color</h5>
      <p style={s.p}>
        Lets open your <code>style.css</code> file in Sublime Text so
        we can change the color of your title.
      </p>
      <ul>
        <li>navigate to your Desktop/science project site folder</li>
        <li>right-click the <code>style.css</code> file, and select "open with"</li>
        <li>from the list of applications, chose "Sublime Text"</li>
      </ul>
      <p style={s.p}>
        Copy and paste the text below into your <code>style.css</code> file
        and save it. After saving, refresh your site in Chrome, what happened?!?
        Does that color look familiar?
      </p>
      <Gist id="fa85441b9cc04870e392850b724c7347"/>
      <p>
        Do you want your title to be your favorite color, or maybe
        your <b> least </b> favorite color? Go to the color picker in the link
        below, find a color you like, and copy and paste the value into your
        <code>style.css</code> file. Remember to save the file, and refresh
        the page to load your changes.
      </p>
      <a href="https://www.w3schools.com/colors/colors_picker.asp">Color Picker</a>
      <p style={s.p}>
        Continue on to the next step to change your title font.
      </p>
    </div>
  );
}