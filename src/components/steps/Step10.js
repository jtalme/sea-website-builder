import React from 'react';
import Interactive from 'react-interactive';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step14({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        Finally, lets add some pictures to spice up the page a bit. To start, we'll add
        a picture of you, or your project, so hopefully you have one handy! If you don't
        have a picture of your own to put on your site, jump the next step where we'll find
        one on the internet and link to it.
      </p>
      <ol>
        <li>
          Download the image to your "Downloads" folder
        </li>
        <li>Open your "Files" app, and go the "Downloads" folder</li>
        <li>
          Right-click on the picture you downloaded in the first step, click
          "Rename", and save the the picture as "project.png"
        </li>
        <li>
          Add the <code>&lt;img&gt;</code> tag in the code sample below to
          your <code>site.html</code> file.
        </li>
        <li>Save your <code>site.html</code> file in Caret, and refresh your Chrome tab.</li>
      </ol>
      <Gist id="5e895c618e1ae7ac1d1b40e9a76a51d2"/>
      <h3>Styling Your <code>&lt;img&gt;</code></h3>
      <p style={s.p}>
        Depending on how large your image is it might look a little funny on your site.
        Lets apply some styling to the image so it is more appropriately sized for
        your page. Copy and paste the CSS below into
        your <code>style.css</code> file. Then save your <code>style.css</code> file in
        Caret, and refresh your <code>site.html</code> file in Chrome.
      </p>
      <Gist id="237dff35c1fd10e2ef76238a14e20c4a"/>
      <p style={s.p}>
        Now you should have an image on your page! Lets move on to the next step to add
        an image we load from the internet.
      </p>
    </div>
  );
}