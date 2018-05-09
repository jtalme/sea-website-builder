import React from 'react';
import Interactive from 'react-interactive';
import { Code } from '../../styles/style';
import s from '../../styles/step.style';

export default function Step3() {
  return (
    <div>
      <h3>Create Your Project Files</h3>
      <p style={s.p}>
        We'll start by creating a folder that will contain your website
        HTML and CSS files. On your desktop, create a folder called
        <code>science project site</code>. Inside the folder we'll need
        to create two files: <code>site.html</code> and
        <code>style.css</code>. The folder and files should be structure
        like this:
      </p>

      <pre><code>
      Desktop/<br/>
      ├── science project site<br/>
      │   ├── site.html<br/>
      │   ├── style.css<br/>
      </code></pre>

      <p style={s.p}>
        Now that we have our files in place, we can begin to write the HTML
        that will become our site. Continue on to add a title to your website.
      </p>
    </div>
  );
}