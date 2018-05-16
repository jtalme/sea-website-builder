import React from 'react';
import s from '../../styles/step.style';

export default function Step1({title}) {
  return (
    <div>
      <h3>{title}</h3>
      <p style={s.p}>
        Lets get started by downloading some tools that will help us build.
        A browser will help us view our website while we build, Chrome
        should be a good tool for the job.
      </p>
      <a href="https://www.google.com/chrome">Download Chrome</a>
      <p style={s.p}>
        Its also useful to have a nice Text Editor that will allow us to edit
        and modify files while we create our website. Sublime Text is a popular
        choice, but you're free to use whatever you'd like.
      </p>
      <a href="https://www.sublimetext.com/3">Download Sublime Text</a>
      <p style={s.p}>
        Continue on to the next step to learn more about HTML and CSS,
        programming languages we'll be using to build your website.
      </p>
    </div>
  );
}