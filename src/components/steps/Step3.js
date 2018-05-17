import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import s from '../../styles/step.style';

export default function Step3({title}) {
  return (
    <div>
      <h3>{title}</h3>
      <p style={s.p}>
        We'll get started by creating two files in the <code>Downloads</code>
        folder of your Chromebook by doing the following:
      </p>
      <ol>
        <li>Open Caret</li>
        <li>
          A new file should automatically be created,
          click <strong>File <Glyphicon glyph="arrow-right" /> Save</strong> and
          save the file with the filename <code>site.html</code> in the Downloads
          folder
        </li>
        <li>
          In Caret,
          click <strong>File <Glyphicon glyph="arrow-right" /> New File</strong> to
          create another file
        </li>
        <li>
          Now click <strong>File <Glyphicon glyph="arrow-right" /> Save</strong> and
          save this file with the filename <code>style.css</code> in the Downloads
          folder
        </li>
      </ol>
      <p style={s.p}>
        For the final setup step, lets open our <code>site.html</code> file in
        Chrome so we can view changes to our page as we make updates.
      </p>
      <ol>
        <li>
          Click the <Glyphicon glyph="search" /> button on your Chromebook keyboard,
          type in "File", and open the "Files" app
        </li>
        <li>
          Click on the "Downloads" folder, and find the <code>site.html</code> file
          you created in the steps above
        </li>
        <li>Right-click on the <code>site.html</code> file, and click "View"</li>
        <li>
          Congrats, you just opened your site in Chrome! The page is blank for now,
          like an unpainted canvas, but things are about to get a lot more
          interesting
        </li>
      </ol>
      <p style={s.p}>
        Now that we have our files in place, and our <code>site.html</code> file
        open in Chrome, lets continue on to the next step to add a title
      </p>
    </div>
  );
}