import React from 'react';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step6({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        Lets play with the font on our site. So far it will only show up on
        our title, but we'll be adding plenty of text later on, but why not have
        some fun right now?!?
      </p>
      <ol>
        <li>Open a new Chrome tab and go to <a href='https://fonts.google.com/'>Google Fonts</a></li>
        <li>
          Find a font you like, and click the red plus buttons, this will put
          the font in a tray in the bottom of your browser window.
        </li>
        <li>
          Click the tray in your Google Fonts tab to expand it, this will show a window with
          a link it like:<br/>
          <code>&lt;link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"&gt;</code><br/>
        </li>
        <li>
          Copy and paste this link into the <code>&lt;head&gt;</code> section of your
          <code>site.html</code> file like the code example shows below.
        </li>
        <li>
          The Google Fonts window will also show some CSS similar to this:<br/>
          <code>font-family: 'Roboto', sans-serif;</code>
        </li>
        <li>
          Copy and paste this link into your <code>style.css</code> file in the <code>body</code>
          CSS selector like the code example shown below.
        </li>
        <li>Save the files and refresh your Chrome browser tab with your site.</li>
      </ol>
      <Gist id='9c6d7d6326698764a821b30b492b8167'/>
      <Gist id='27545778e5aaaabc162efe7d732a5ff2'/>
      <p style={s.p}>
        Try a few different fonts on your site to see what you like. You can even use
        different fonts on different titles and paragraphs of your site by changing what
        CSS selectors you add the <code>font-family</code> CSS rule to in your
        <code>style.css</code> file.
      </p>
      <p style={s.p}>
        When you have found a font you like, move on to the next step.
      </p>
    </div>
  );
}