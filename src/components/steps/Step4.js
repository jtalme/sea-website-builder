import React from 'react';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step4({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        Lets open our <code>site.html</code> file with Sublime Text:
      </p>
      <ul>
        <li>navigate to your <code>Desktop/science project site</code> folder</li>
        <li>right-click the <code>site.html</code> file, and select "open with"</li>
        <li>from the list of applications, chose "Sublime Text"</li>
      </ul>
      <p style={s.p}>
        Copy and paste the code below into your <code>site.html</code> file.
      </p>
      <p style={s.p}>
        <b>Important:</b> Replace the <code>Change me!</code> text with the title
        of your science project.
      </p>
      <Gist id='2ac195082de15a5ff908bfcdb9340730'/>
      <h3>Viewing your Site</h3>
      <p style={s.p}>
        Lets open our <code>site.html</code> file with Chrome:
      </p>
      <ul>
        <li>navigate to your Desktop/science project site folder</li>
        <li>right-click the <code>site.html</code> file, and select "open with"</li>
        <li>from the list of applications, chose "Chrome"</li>
      </ul>
      <p style={s.p}>
        Congratulations! You should now be looking at a white page with
        your science project title at the top! If you look at the browser tab,
        you'll see your project title there too.
      </p>
      <h3>Which title is which?</h3>
      <p style={s.p}>
        Change the text in the <code>title</code> tag, and the <code>h1</code> tag
        to figure out which title corresponds to the browser tab, and the title
        on the web page.
      </p>
      <p style={s.p}>
        Move on to the next step to make some additional changes to your title.
      </p>
    </div>
  );
}