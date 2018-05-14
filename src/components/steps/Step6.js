import React from 'react';
import Interactive from 'react-interactive';
import Gist from 'react-gist';
import { Code } from '../../styles/style';
import s from '../../styles/step.style';

export default function Step6() {
  return (
    <div>
      <h3>Adding Text to Your Site</h3>
      <p style={s.p}>
        Now that we have a title, lets add some text to describe your science
        project. Copy the section added to the site below into your
        <code>site.html</code> file, save and refresh the page.
      </p>
      <Gist id='191010a6dd776acae6f3c8b99a134d76'/>
      <h5>The &lt;p&gt; tag</h5>
      <p style={s.p}>
        You'll notice we introduced a new HTML tag: <code>&lt;p&gt;</code>. The
        <code>p</code> stands for paragraph. This is a tag that's commonly used
        to represent a paragraph of text.
      </p>
      <p style={s.p}>
        Replace the <code>[add Experiment Design paragraph here]</code> text
        with a paragraph about your own experiment design. Take some time to
        type out the design of your experiment. Some questions to answer in your
        paragraph could be:
        <ul>
          <li><i>What</i> was your experiment?</li>
          <li><i>Why</i> did you choose this experiment?</li>
          <li><i>Where</i> did the experiment take place?</li>
          <li><i>How</i> did you conduct the experiment?</li>
          <li><i>When</i> did you do the experiment and how long did it take?</li>
          <li>... and more! What else should people know about your experiment?</li>
        </ul>
        After you finish adding your Experiment Design paragraph, save your
        <code>site.html</code> file, and refresh your site in Chrome. Do you see
        the updates you made?
      </p>
      <h5>Styling your &lt;p&gt;aragraph</h5>
      <p style={s.p}>

      </p>
      <p style={s.p}>
        Lets move on to the next step to add more information in the form of lists.
      </p>
    </div>
  );
}