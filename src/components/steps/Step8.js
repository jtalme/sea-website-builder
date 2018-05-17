import React from 'react';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step8({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        Next we'll add a list of variables that are changing during our experiment.
        Lets put these variables in a list, so its easy to see and understand each
        different variable. Copy the HTML below into your own <code>site.html</code>
        save and refresh the page.
      </p>
      <Gist id="7b025f886ab7eb7fdad3a99c12e23e8c"/>
      <h3>The &lt;ul&gt; and &lt;li&gt; tags</h3>
      <p style={s.p}>
        These tags are responsible for showing lists. <code>&lt;ul&gt;</code> stands
        for unordered list, and <code>&lt;li&gt;</code> stands for list item. The
        <code>&lt;ul&gt;</code> are optional in this scenario, and just make it so the
        collection of <code>&lt;li&gt;</code> tags to appear more grouped. Try removing the
        <code>&lt;ul&gt;</code> tags to see what happens.
      </p>
      <p style={s.p}>
        Now that you can see the placeholder variable text on your page, replace the
        <code>[variable name]</code> and <code>[variable description]</code> text with
        your actual variables names and descriptions. If you have less than
        three delete the lines of <code>&lt;li&gt;</code> tags you don't need. If you have
        more than three copy and paste the <code>&lt;li&gt;</code> tags to make your
        list longer.
      </p>
      <h3>Listing Materials</h3>
      <p style={s.p}>
        Lets copy the "Variables" title and list items HTML and paste below to create another
        list. We should change the title to "Materials". See the code example below for
        more guidance.
      </p>
      <Gist id="574428e1eb674c2a2c99ed1eaa75adc1" />
      <p style={s.p}>
        Add the materials you used in your science project to the list, adjusting the HTML
        as needed, save your <code>site.html</code> file and refresh to make sure your materials
        list looks good.
      </p>
      <p style={s.p}>
        There's another type of list that we'll introduce in the next step, lets
        continue.
      </p>
    </div>
  );
}