import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import PageNotFound from './PageNotFound';
import s from '../styles/example.style';

const ExampleSiteText = () => (
  <div className="container">
    <nav style={s.breadcrumbs}>
      <Breadcrumbs />
    </nav>
    <h1 style={s.title}>BBQ makes me slow!</h1>
    <h3 style={s.subtitle}>by Jon Alme</h3>
    <img style={Object.assign(s.img, s.center)} src="https://media.giphy.com/media/Nq8TE2Wo5Yg3m/giphy.gif"/>
    <img style={Object.assign(s.img, s.center)} src="https://media.giphy.com/media/jfTDrYfZvlZja/giphy.gif"/>
    <img style={Object.assign(s.img, s.center)} src="https://media.giphy.com/media/AZA94nmAWWF4k/giphy.gif"/>
    <h2>Hypothesis</h2>
    <p>
      I hypothesize that with every 6 ribs I eat, my 40 yard dash will slow down by 3 seconds.
    </p>
    <h2>Experiment Design</h2>
    <p>
      To better understand the rate at which BBQ makes me slow, I'm going to run a 40 yard
      dash after every 6 ribs I eat. I'll leave myself a generous window of 10 minutes to eat
      the next set of ribs and recover from the previous sprint. The experiment will begin when
      the ribs are done cooking, at which point I will run a 40 yard dash prior to eating
      any food, which will serve as the control. I will then eat 6 ribs, and run a 40 yard dash
      4 times, totalling two racks of ribs, and 5 40 yard dashes including the initial control
      sprint.
    </p>
    <h2>Variables</h2>
    <ul>
      <li><b>Ribs eaten:</b> over time the number of ribs eaten will increase.</li>
      <li>
        <b>Water:</b> I'll need to hydrate in between sprints, and will by
        hydrating to comfort level rather than a perscribed amount of volume.
      </li>
      <li>
        <b>Sprints completed (fatigue):</b> I'll be running more and more as
        the experiment continues. This could create fatigue that affects
        later sprints.
      </li>
      <li>
        <b>Atmosphere:</b> we can't control the weather, and its possible wind or
        rain could affect running conditions
      </li>
    </ul>
    <h2>Materials</h2>
    <ul>
      <li><b>Cooked ribs and BBQ sauce</b> Sweet, sweet, running fuel.</li>
      <li><b>Water:</b> for hydration.</li>
      <li><b>Workout gear:</b> I don't run in my grilling apron after all (at least not intentionally).</li>
      <li><b>Stopwatch:</b> to time the sprints with.</li>
      <li><b>Cones:</b> to setup 40 yards apart so I know how far to run.</li>
      <li><b>Measuring device:</b> so the cones get set exactly 40 yards apart (I don't want to run 41 yards after eating 2 racks of ribs).</li>
    </ul>
    <h2>Experiment Setup</h2>
    <ol>
      <li>Retrieve supplies</li>
      <li>Cook the ribs</li>
      <li>Stage the water and ribs in an area near the 40 yard dash start line</li>
      <li>Set one cone down near the ribs and water to indicate the start line</li>
      <li>
        Use the measuring tape to set a second cone down 40 yards away
        from the initial cone
      </li>
      <li>Run and eat and run!</li>
    </ol>
    <h2>Data</h2>
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Run #</th>
          <th scope="col">Ribs Eaten</th>
          <th scope="col">Run time (40 yard dash)</th>
          <th scope="col">Feeling (as described by text emoji)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>0</td>
          <td>5.1</td>
          <td>:D</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>6</td>
          <td>5.5</td>
          <td>:|</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>12</td>
          <td>5.75</td>
          <td>:/</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>18</td>
          <td>5.5</td>
          <td>>:o</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>24</td>
          <td>4.9</td>
          <td>>:{'{}'}==</td>
        </tr>
      </tbody>
    </table>
    <h2>Conclusion</h2>
    <p>
      I suspect one control run isn't enough. If I were to conduct this
      experiment again I would perform 5 sprints with 10 minutes of rest and
      adequate hydration in between, but no BBQ, to see if my speed in the
      40 yard dash changed.
    </p>
    <nav style={s.breadcrumbs}>
      <Breadcrumbs />
    </nav>
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