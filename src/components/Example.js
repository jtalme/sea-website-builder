import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import s from '../styles/example.style';

const ExampleSiteText = () => (
  <div style={Object.assign(s.body, s.center)}>
    <h1 style={s.title}>Exploding Volcano!</h1>
    <h3 style={s.subtitle}>by Jon Alme</h3>
    <img style={Object.assign(s.img, s.center)} src="https://media.gettyimages.com/photos/new-jersey-jersey-city-close-up-of-model-with-award-ribbon-picture-id114849068"/>
    <h2>Summary</h2>
    <p>
      I made a volcano explode, because that's what volcanoes do, and when
      I poured the vinegar on the baking soda it went boom.
    </p>
    <h2>Construction</h2>
    <ul>
      <li>
        Step 1: Build a clay volcano around a small plastic water bottle.
        Be sure to leave the opening of the water bottle exposed so we
        can add "lava" later.
      </li>
      <li>
        Step 2: Add water, baking soda, and dish soap to the water bottle.
      </li>
      <li>Step 3: Put safety glasses on since magic is dangerous.</li>
      <li>Step 4: Finally, add vinegar to the water bottle.</li>
      <li>Step 5: Watch the magic</li>
    </ul>
    <h2>Background</h2>
    <p>
      Volcanic eruptions are the result of a buildup of pressure caused by magma
      and gas seeping through the earth's crust. Eruptions usually coincide with
      tectonic activity such as earthquakes.
    </p>
    <h2>Learnings</h2>
    <p>The most important lesson I learned is that magic is dangerous!</p>
    <p>
      Baking soda, dish soap, and water represent a buildup of magma under the
      earth's surface. Adding vinegar is similar to tectonic activity that weakens
      the earths crust, giving the magma a path to the earth's surface where it
      erupts out of the volcano.
    </p>
    <h2>Next Steps</h2>
    <p>
      When volcanoes erupt they fill the atmosphere with ash and dust that can be
      harmful to wildlife, humans, and even aircraft. If I had more time I would
      simulate this by flying a remote control plane through my erupting volcano.
    </p>
  </div>
);

export default function ExampleSite() {
  return (
    <Switch>
      <Route
        exact path="/example"
        render={() => (
          <div>
            <ExampleSiteText />
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}