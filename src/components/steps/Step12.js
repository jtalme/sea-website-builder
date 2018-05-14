import React from 'react';
import Interactive from 'react-interactive';
import Gist from 'react-gist';
import { Code } from '../../styles/style';
import s from '../../styles/step.style';

export default function Step12() {
  return (
    <div>
      <h3>Ordered List of Setup Steps</h3>
      <p style={s.p}>
        Now we'll add a list of steps we took to setup and conduct our experiment.
        Being able to repeat an experiment and arrive at a consistent conclusion is
        one of the most important parts of science, so write your steps so that someone
        else could follow them and repeat your science project. Lets get started by
        copying the HTML in the code example below into our own <code>site.html</code>
        file.
      </p>
      <Gist id="f518b3a8f80ce1a06031a5e719a4de17"/>
      <h5>The &lt;ol&gt; tag</h5>
      <p style={s.p}>
        The <code>&lt;ol&gt;</code> tag stands
        for ordered list, and causes the <code>&lt;li&gt;</code> (list item) tags to
        render with a number prefix to more clearly show the order.
      </p>
      <p style={s.p}>
        Lets take a breath to apply some styling before we continue adding more content.
      </p>
    </div>
  );
}