import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  return (
    <div>
      <p style={s.p}>
        This is a tutorial for building a website, specificlally for a science 
        project, but you could put anything you'd like to show the world on your 
        site. Hopefully you'll learn some HTML and CSS along the way, and be 
        inspired to continue learning more about web development.
      </p>
      <p style={s.p}>
        Check out the example site below to get a better idea of what you'll be
        building, or continue on to Step 1 to get started!
      </p>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example"
        >Example Project: BBQ makes me slow!</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/steps/1"
        >Step 1: Project Setup</Interactive>
      </div>
    </div>
  );
}