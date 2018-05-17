import React from 'react';
import Gist from 'react-gist';
import s from '../../styles/step.style';

export default function Step10({title}) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={s.p}>
        We can continue to apply styles to our individual page elemnents, or we can
        import a third party script that will give us a head start. Meet
        <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/"> Bootstrap</a>,
        a framework that will help style your site. Bootstrap will apply a bunch of
        CSS rules that will by applied to your site with a one-line import statement.
        If you like the way it looks, keep it! If you don't like the way it looks
        you always have the option to override the styles you don't like, or remove it
        and style the page yourself.
      </p>
      <p style={s.p}>
        Lets add the bootstrap import statement to your <code>site.html</code> file
        as shown in the code sample below.
      </p>
      <Gist id="a2c04ea9bdbbc480c7934dc6298ed4ba"/>
      <p style={s.p}>
        We'll show you just how easy it is to add some <b><i>pizazz</i></b> to your data
        tables with Bootstrap in the steps to come.
      </p>
    </div>
  );
}