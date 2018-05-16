import React from 'react';
import Interactive from 'react-interactive';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step14({title}) {
  return (
    <div>
      <h3>{title}</h3>
      <p style={s.p}>
        Finally, lets add some pictures to spice up the page a bit.
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