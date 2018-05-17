import React from 'react';
import Interactive from 'react-interactive';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step15({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        In addition to adding your own picture, you can link to a picture you
        find on the internet and add it to your page.
      </p>
      <ol>
        <li>
          Copy and paste the following img tag into your <code>site.html</code>
          file under the existing <code>&lt;img&gt;</code> tag.<br/>
          <code>&lt;img src="PASTE LINK BETWEEN THESE QUOTES" /&gt;</code>
        </li>
        <li>
          Use Google to find a picture that you like and might help describe your
          science project
        </li>
        <li>Right-click on the image you found and select "Copy Image Address"</li>
        <li>
          Paste the image address you copied into the <code>src=</code> attribute
          of the <code>&lt;img&gt;</code> tag you just added to your site.
        </li>
        <li>
          Save your <code>site.html</code> file in Caret, and refresh your tab in Chrome
        </li>
      </ol>
      <p style={s.p}>
        Is your image showing on your page? Is the image the same size as the image
        above it? That's because the CSS rule we added before applies to all
        <code>&lt;img&gt;</code> HTML elements, yay!
      </p>
      <p style={s.p}>
        Lets move on to the next step to add a table with data.
      </p>
    </div>
  );
}