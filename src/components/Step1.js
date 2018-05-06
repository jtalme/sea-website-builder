import React from 'react';
import Interactive from 'react-interactive';
import { Code } from '../styles/style';
import s from '../styles/step.style';

export default function Step1() {
  return (
    <div>
      <h3>Required Tools</h3>
      <p style={s.p}>
        Lets get started by downloading some tools that will help us build.
        A browser will help us view our website while we build, Chrome
        is my go to.
      </p>
      <Interactive
        as="a"
        {...s.link}
        href="https://www.google.com/chrome"
      >Download Chrome</Interactive>
    </div>
  );
}