import React from 'react';
import Interactive from 'react-interactive';
import { Code } from '../../styles/style';
import s from '../../styles/step.style';

export default function Step2() {
  return (
    <div>
      <h3>HTML Overview</h3>
      <p style={s.p}>
        <b>H</b>yper<br/>
        <b>T</b>ext<br/>
        <b>M</b>arkup<br/>
        <b>L</b>anguage<br/><br/>
        HTML is a markup language that browsers support that allows them to take
        a text document, and show the user an interactive web page of pictures,
        videos, fancy text, and things you can click, drag, hover, and type in.
      </p>
      <p style={s.p}>
        <b>C</b>ascading<br/>
        <b>S</b>tyle<br/>
        <b>S</b>heets<br/><br/>
        CSS is a styling language that provides instruction on how the HTML
        will look. CSS provides commands that tell a browser what the size,
        color, spacing, and fonts of an HTML document should be. HTML describes
        the objects on a page, such as a title, a paragraph, a table, or an
        image. CSS describes how large the title is and what font it should use,
        what the spacing and height of the rows of the table are, and how
        wide an image should be, even whether or not an image should have a border,
        and how thick and what color.
      </p>
      <h5>CSS and HTML Continued...</h5>
      <p style={s.p}>
        There are a lot of good HTML and CSS sites and tutorials out there
        created by folks that know way more than me, and are much more helpful!
        I encourage you to go exploring and continue building after you've
        completed your science project site.
      </p>
      <p style={s.p}>
        Continue on to the next step to start putting your new HTML and CSS
        knowledge to work!
      </p>
    </div>
  );
}