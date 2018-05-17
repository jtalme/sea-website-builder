import React from 'react';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step9({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        Now we'll add a list of steps we took to setup and conduct our experiment.
        Being able to repeat an experiment and arrive at a consistent conclusion is
        one of the most important parts of science, so write your steps so that someone
        else could follow them and repeat your science project. Lets get started by
        copying the HTML in the code example below into our own <code>site.html</code>
        file.
      </p>
      <Gist id="f518b3a8f80ce1a06031a5e719a4de17"/>
      <h3>The &lt;ol&gt; tag</h3>
      <p style={s.p}>
        The <code>&lt;ol&gt;</code> tag stands
        for ordered list, and causes the <code>&lt;li&gt;</code> (list item) tags to
        render with a number prefix to more clearly show their order.
      </p>
      <p style={s.p}>
        Replace the <code>[step name]</code> text
        and <code>[step description]</code> text with variable names and descriptions
        that will help others understand the variables and why they're important to
        your project. As usual, save your <code>site.html</code> file in Care, and
        refresh your <code>site.html</code> tab in Chrome to see your changes.
      </p>
      <p style={s.p}>
        Lets take a breath from writing about our project to add some pictures!
      </p>
    </div>
  );
}