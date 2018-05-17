import React from 'react';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step4({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        Copy and paste the code below into your <code>site.html</code> file
        in Caret.
      </p>
      <p style={s.p}>
        <b>Important:</b> Replace the <code>Change me!</code> text with the title
        of your science project.
      </p>
      <Gist id='2ac195082de15a5ff908bfcdb9340730'/>
      <h3>Viewing Your Changes</h3>
      <p style={s.p}>
        To view your changes do the following:
      </p>
      <ol>
        <li>In Caret, save your <code>site.html</code> file</li>
        <li>
          In Chrome, refresh the tab where you're viewing the
          <code>site.html</code> file
        </li>
      </ol>
      <p style={s.p}>
        Congratulations! You should now be looking at a white page with
        your science project title at the top! If you look at the browser tab,
        you'll see your project title there too.
      </p>
      <h3>Which title is which?</h3>
      <p style={s.p}>
        Change the text in the <code>title</code> tag, and the <code>h1</code> tag
        to figure out which title corresponds to the browser tab, and which title
        is showing on your web page.
      </p>
      <p style={s.p}>
        Move on to the next step to make some additional changes to your title.
      </p>
    </div>
  );
}