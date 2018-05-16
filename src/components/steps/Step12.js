import React from 'react';
import Interactive from 'react-interactive';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step12({title}) {
  return (
    <div>
      <h3>{title}</h3>
      <p style={s.p}>
        We're going to be using Bootstrap to style our table. You can
        read more about Bootstrap table
        styles <a href="https://getbootstrap.com/docs/4.0/content/tables/"> here. </a> To
        start lets add some CSS selectors to our table HTML elements. Use
        the code sample below to apply selectors to your table header and
        rows. After applying the selectors save your <code>site.html</code>
        file and refresh the page in Chrome.
        <br/>
        <br/>
        <b>Note: </b> If you're table size changed from the example your style
        updates may be slightly different based on your columns and rows.
      </p>
      <Gist id="570605a76be9b0a1132c4f4936cd6625"/>
      <p style={s.p}>
        Does your table look different now? If should look very similar to the table
        shown <a href="https://getbootstrap.com/docs/4.0/content/tables/#examples"> here. </a> We
        can use Bootstrap to make other changes too. Lets make it dark by adding another
        CSS class to your table tag so it looks like this:
        <code>&lt;table class="table table-dark"&gt;</code>. Now save your
        <code>site.html</code> file and refresh your page. Do you like what you see?
      </p>
      <p style={s.p}>
        Lets add a couple more classes to continue styling our table, like this:<br/>
        <code>&lt;table class="table table-dark table-bordered table-striped table-hover"&gt;</code><br/>
        Save and refresh the page to check out your newly styled table. Drag your mouse over
        the rows to see what happens. The <code>table-hover</code> class will highlight the
        row when your mouse hovers!
      </p>
      <p>
        Keep the classes you like on the table, and lets wrap up the text paragraphs
        on the next step.
      </p>
    </div>
  );
}