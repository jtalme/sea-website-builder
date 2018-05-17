import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import s from '../../styles/step.style';

export default function Step1({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        Lets get started by downloading some tools that will help us build
        a site with your Chromebooks. The good news is, you already have the
        Chrome browser installed which is a great tool to have! Next we'll
        need to install the Caret Chrome App from the Chrome Web Store.
      </p>
      <ol>
        <li>
          Go to the
          <a
            href="https://chrome.google.com/webstore/detail/caret/fljalecfjciodhpcledpamjachpmelml?hl=en"
            target="_blank"
          > Caret app page in the Chrome Web store</a>
        </li>
        <li>Click "Add to Chrome"</li>
        <li>
          Open Caret by clicking the <Glyphicon glyph="search" /> button,
          typing in "Caret", and clicking the Caret app.
        </li>
        <li>
          <strong>IMPORTANT:</strong> High five a
          friend  <Glyphicon glyph="thumbs-up" />  you're
          ready to start building
        </li>
      </ol>

      <p style={s.p}>
        Caret is a text editor that runs on Chrome. It will allow us to create
        and edit files on your Chromebook that we'll be able to view as web
        pages in Chrome, neato!
      </p>
      <p style={s.p}>
        Continue on to the next step to learn more about HTML and CSS,
        programming languages we'll be using to build your website.
      </p>
    </div>
  );
}