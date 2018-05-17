import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import s from '../../styles/step.style';

export default function Step3({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        We'll get started by creating a folder in
        your <code>Downloads</code> folder to put all of our files in.
      </p>
      <ol>
        <li>
          Click the <Glyphicon glyph="search" /> button on your keyboard,
          search for "files", and open the "Files" app.
        </li>
        <li>Select the "Downloads" folder in your "Files" app.</li>
        <li>Right-click anywhere in the file list, and select "New folder"</li>
        <li>Name the folder <code>Science Project Site</code></li>
      </ol>
      <p style={s.p}>
        Next we'll create two files in the <code>Science Project Site</code>
        folder we just created.
      </p>
      <ol>
        <li>Open Caret, which will automatically create a new file.</li>
        <li>
          Click <strong>File <Glyphicon glyph="arrow-right" /> Save File As</strong> and
          save the file with the filename <code>site.html</code> in your "Science Project Site"
          folder
        </li>
        <li>
          In Caret,
          click <strong>File <Glyphicon glyph="arrow-right" /> New File</strong> to
          create another file
        </li>
        <li>
          Now click <strong>File <Glyphicon glyph="arrow-right" /> Save File As</strong> and
          save this file with the filename <code>style.css</code> in your "Science Project Site"
          folder.
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
          Click on the "Downloads" folder, and then find and click on your
          "Science Project Site" folder
        </li>
        <li>
          In your "Science Project Site" folder, right-click on
          the <code>site.html</code> file, and click "View"
        </li>
        <li>
          Congrats, you just opened your site in Chrome! The page is blank for now,
          like an unpainted canvas, but things are about to get a lot more
          interesting
        </li>
      </ol>
      <p style={s.p}>
        Now that we have our files in place, and our <code>site.html</code> file
        open in Chrome, lets continue on to the next step to add a title.
      </p>
    </div>
  );
}