import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step11({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        Lets continue adding content to your page. Now that we've provided enough content
        to teach someone how to setup and run your experiment, lets add the results from
        your experiment. This will most likely be data that we can put in a table with
        the following elements:
      </p>
      <ul>
        <li>
          <b>Column Header:</b> A row of titles that communicate the data in each column.
        </li>
        <li>
          <b>Row Header:</b> The first column in each row that acts as a title for the row.
          This is often a number for the row.
        </li>
        <li>
          <b>Rows: </b> Each row consists of a value for each column that can be described
          by that column's header or title.
        </li>
      </ul>
      <p style={s.p}>
        Lets add a table to our page so we can see what a table looks like in HTML. Copy and
        paste the HTML table from the code sample below, save your <code>site.html</code> file
        and refresh your page in Chrome.
      </p>
      <Gist id="99cbd983d88cf4b75d9c270a8d2a8a9b"/>
      <h3>HTML Table Tags</h3>
      <p style={s.p}>
        Do you see the "Data Table" title and a table with 4 rows of data? We used several
        HTML tags to create this table, here is a breakdown of each tag used:
      </p>
      <ul>
        <li><code>&lt;table&gt;</code> the outermost tag indicates everything inside it is for a table</li>
        <li><code>&lt;thead&gt;</code> groups the column headers</li>
        <li><code>&lt;tbody&gt;</code> groups the rows, also known as the table body</li>
        <li><code>&lt;tr&gt;</code> defines a row in the table</li>
        <li><code>&lt;th&gt;</code> defines a cell in the table header</li>
        <li><code>&lt;td&gt;</code> defines a cell in a data row, or row in the table body</li>
      </ul>
      <p style={s.p}>
        If you look at the HTML for the table closely, you'll notice there are a few
        different combinations of nested tags. Lets break those combinations down.
        Since everything is wrapped in a <code>&lt;table&gt;</code> tag we'll leave
        that out in the combinations below:
      </p>
      <ul>
        <li>
          <code>&lt;thead&gt; &lt;tr&gt; &lt;th&gt;</code> table header <Glyphicon glyph="arrow-right" /> table
          row <Glyphicon glyph="arrow-right" /> header cell... this is a column header!
        </li>
        <li>
          <code>&lt;tbody&gt; &lt;tr&gt; &lt;th&gt;</code> table body <Glyphicon glyph="arrow-right" /> table
          row <Glyphicon glyph="arrow-right" /> header cell... this is a row header!
        </li>
        <li>
          <code>&lt;tbody&gt; &lt;tr&gt; &lt;td&gt;</code> table body <Glyphicon glyph="arrow-right" /> table
          row <Glyphicon glyph="arrow-right" /> header cell... this is a table row data cell!
        </li>
      </ul>
      <p style={s.p}>
        Do the tag nesting descriptions above make sense to you? How about the way the
        table and is displaying on your page? If you're confused feel free to ask a
        friend or a mentor for some help!
      </p>
      <h3>Table Data</h3>
      <p style={s.p}>
        Replace the text in the table header cells with your column names. You may need fewer
        or more columns than the provided table template. Can you figure out how to add
        extra columns? Ask a mentor for help if you're stuck!
      </p>
      <p style={s.p}>
        Replace the values in the table rows with the values from your science project. After
        all of your data is in the table, save your <code>site.html</code> file and refresh
        the page in Chrome.
      </p>
      <p style={s.p}>
        Move on to the next step where we'll style the table.
      </p>
    </div>
  );
}