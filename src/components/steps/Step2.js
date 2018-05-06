import React from 'react';
import Interactive from 'react-interactive';
import { Code } from '../../styles/style';
import s from '../../styles/step.style';

export default function Step1() {
  return (
    <div>
      <h3>HTML Overview</h3>
      <p style={s.p}>
        Quick introduction to HTML, what it can do, and a few examples of how tags are used.
      </p>
    </div>
  );
}